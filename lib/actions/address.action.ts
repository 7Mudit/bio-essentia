"use server";
import Address from "@/database/address.model"; // Adjust the import path as necessary
import { connectToDb } from "../mongoose";
import { revalidatePath } from "next/cache";
import User from "@/database/user.model";

export async function createAddress(addressData: any, clerkId: string) {
  try {
    await connectToDb(); // Make sure the database connection is established
    // Create a new address document
    const newAddress = await Address.create(addressData);
    // Assuming clerkId is passed separately or extracted from addressData
    // Find the user by clerkId and update their address reference
    await User.findOneAndUpdate(
      { clerkId: clerkId },
      { $push: { addresses: newAddress._id } }, // Push the new address ID into the user's addresses array
      { new: true }
    );
    return newAddress; // Return the created address document
  } catch (err) {
    console.log(err); // Log any errors
    throw err; // Rethrow the error to handle it in the calling function if necessary
  }
}

export async function updateAddressByClerkId(params: any) {
  try {
    await connectToDb(); // Ensure the database connection
    const { clerkId, updateData, path } = params;

    // Find the user by clerkId
    const user = await User.findOne({ clerkId });
    if (!user || !user.addresses || user.addresses.length === 0) {
      throw new Error("User or user address not found");
    }

    // Assuming user.addresses contains the ID(s) of the addresses
    const addressId = user.addresses[0]; // Get the first (or only) address ID

    // Update the address document
    const updatedAddress = await Address.findByIdAndUpdate(
      addressId,
      updateData,
      {
        new: true,
      }
    );
    if (path) {
      revalidatePath(path); // Revalidate the Next.js path if provided
    }

    return updatedAddress; // Return the updated address document
  } catch (err) {
    console.log(err); // Log any errors
    throw err; // Rethrow the error for external handling if necessary
  }
}

export async function userHasAddress(clerkId: string) {
  try {
    await connectToDb();
    const user = await User.findOne({ clerkId }).populate("addresses"); // Assuming 'addresses' is the field where address IDs are stored

    if (!user) {
      throw new Error("User not found");
    }

    // Check if the user has any addresses associated
    const hasAddress = user.addresses && user.addresses.length > 0;
    return hasAddress;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function fetchAddress(clerkId: any) {
  try {
    // Ensure the database connection is established
    await connectToDb();

    // Find the user by clerkId
    const user = await User.findOne({ clerkId }).populate("addresses"); // Adjust based on your schema, e.g., if addresses are stored directly or via reference

    if (!user) {
      // Handle case where no user is found
      return { success: false, message: "User not found" };
    }

    if (!user.addresses || user.addresses.length === 0) {
      // Handle case where user has no addresses
      return { success: false, message: "No address found for the user" };
    }

    // Assuming user.addresses stores an array of addresses, adjust as needed
    const address = user.addresses[0]; // Adjust logic if you want to handle multiple addresses differently
    console.log(address);
    // Return the found address
    return { success: true, address: JSON.stringify(address) };
  } catch (err) {
    console.error("Error fetching address:", err);
    throw err; // Or handle error as appropriate
  }
}
