"use client";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { z } from "zod";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "@/schemas";
import {
  createAddress,
  updateAddressByClerkId,
} from "@/lib/actions/address.action";
import { useAuth } from "@clerk/nextjs";

const stateOptions = addressSchema.shape.state.options;
const AddressModal = ({ edit, address }: any) => {
  const { isLoaded, userId } = useAuth();
  const defaultValues =
    edit && address
      ? address
      : {
          fullName: "",
          mobileNumber: "",
          pinCode: "",
          houseNumber: "",
          area: "",
          landMark: "",
          town: "",
          state: stateOptions[0],
        };
  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof addressSchema>) {
    if (edit) {
      await updateAddressByClerkId({ clerkId: userId, updateData: values });
    } else {
      const createEntry = await createAddress(values, userId!);
    }
  }

  if (!isLoaded || !userId) {
    return null;
  }
  return (
    <DialogContent className="sm:max-w-[425px] overflow-y-scroll max-h-screen">
      <DialogHeader>
        <DialogTitle>Add your Address</DialogTitle>
        <DialogDescription>Give us your exact address.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-2">
        <div className="mx-auto grid-cols-6 w-full max-w-sm ">
          <div className="p-4 pb-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col lg:flex-row gap-5">
                  <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="1234567890"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pinCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pin Code</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="262309"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="houseNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Flat, House no., Building, Company, Apartment
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="string"
                          placeholder="House No 123"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area, Street, Sector, Village</FormLabel>
                      <FormControl>
                        <Input
                          type="string"
                          placeholder="Village Area"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="landMark"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Land Mark</FormLabel>
                      <FormControl>
                        <Input
                          type="string"
                          placeholder="Near Max Hospital"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col lg:flex-row gap-5">
                  <FormField
                    control={form.control}
                    name="town"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Town</FormLabel>
                        <FormControl>
                          <Input
                            type="string"
                            placeholder="Tanakpur"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="min-w-[150px] pl-3 ">
                              <SelectValue placeholder="Select a verified state to display" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {stateOptions.map((state) => (
                              <SelectItem key={state} value={state}>
                                {state}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <DialogFooter>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default AddressModal;
