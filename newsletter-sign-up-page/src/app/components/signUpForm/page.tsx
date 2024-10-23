"use client"

import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const FormSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email address",
  }),
})

function SignUpForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  const router =useRouter();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('done')
    router.push('../../successPage')

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="flex w-full justify-center text-sm mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-5/6 space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Email address</FormLabel>
                <FormControl>
                  <Input id="form-input" className="bg-white" type="email" placeholder="email@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button id="validation-button" className="w-full h-10 text-sm bg-darkSlategrey hover:bg-tomato duration-200" type="submit">Subscribe to monthly newsletter</Button>
        </form>
      </Form>
    </div>
  )
}

export default SignUpForm