"use client";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactFormPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    alert(
      `Submitted!\nName: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`
    );
  };

  return (
    <main className="p-4 md:p-8">
      <div className="max-w-md mx-auto space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Contact Form</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Fill in the form below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 border rounded-2xl p-4 md:p-6 shadow-sm"
        >
          <FieldSet>
            <FieldLegend>Contact Details</FieldLegend>
            <FieldGroup>
              <Field data-invalid={!!errors.name}>
                <FieldLabel>Name</FieldLabel>
                <FieldContent>
                  <Input placeholder="Enter your name" {...register("name")} />
                  <FieldError errors={errors.name ? [errors.name] : []} />
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.email}>
                <FieldLabel>Email</FieldLabel>
                <FieldContent>
                  <Input placeholder="Enter your email" {...register("email")} />
                  <FieldError errors={errors.email ? [errors.email] : []} />
                </FieldContent>
              </Field>

              <Field data-invalid={!!errors.message}>
                <FieldLabel>Message</FieldLabel>
                <FieldContent>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        placeholder="Type your message here"
                        className="min-h-[120px]"
                        {...field}
                      />
                    )}
                  />
                  <FieldDescription>
                    Write at least 10 characters.
                  </FieldDescription>
                  <FieldError errors={errors.message ? [errors.message] : []} />
                </FieldContent>
              </Field>
            </FieldGroup>
          </FieldSet>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}