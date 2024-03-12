"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useAuth } from "@clerk/nextjs";
import { fetchAddress, userHasAddress } from "@/lib/actions/address.action";
import AddressModal from "./AddressModal";

const CheckAddressModal = () => {
  const { userId } = useAuth();
  const [hasAddress, setHasAddress] = useState(true);
  const [edit, setEdit] = useState(false);
  const [address, setAddress] = useState(null);

  const handleAddress = async () => {
    if (userId) {
      const checkAddress = await userHasAddress(userId);
      if (checkAddress == true) {
        const getAddress = await fetchAddress(userId);
        if (getAddress.success) {
          setHasAddress(true);
          setAddress(JSON.parse(getAddress.address!));
        }
      } else {
        setHasAddress(false);
      }
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddress}
          >
            Buy Now
          </Button>
        </DialogTrigger>
        {edit ? (
          <AddressModal edit={true} address={address} />
        ) : hasAddress ? (
          <DialogContent className="sm:max-w-[425px] ">
            <DialogHeader>
              <DialogTitle>Wanna edit your address?</DialogTitle>
              <DialogDescription>
                You can either edit or proceed with address you have already
                provided.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="mx-auto grid-cols-6 w-full max-w-sm "></div>
            </div>
            <DialogFooter>
              {/* <DialogClose asChild> */}
              <Button
                type="submit"
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit
              </Button>
              {/* </DialogClose> */}

              <Button type="submit">Buy Now</Button>
            </DialogFooter>
          </DialogContent>
        ) : (
          <AddressModal edit={false} />
        )}
      </Dialog>
    </>
  );
};

export default CheckAddressModal;
