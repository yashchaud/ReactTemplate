import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Input } from "./custominput";

export const UseFormHook = <T extends z.ZodTypeAny>(
  schema: T,
  defaultValues?: Record<string, unknown>
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<T> = (data) => {
    console.log(data);
  };
  console.log(schema);
  const knownSchema = [
    "email",
    "string",
    "number",
    "date",
    "boolean",
    "array",
    "object",
    "any",
    "unknown",
  ];

  const SchemaBuilder = (schema: any) => {
    const schemaObject: Record<string, any> = {};

    // Mapping of schema types to Zod methods
    const zodTypeMapping: Record<string, any> = {
      email: () => z.string().email(),
      string: () => z.string(),
      number: () => z.number(),
      date: () => z.date(),
      boolean: () => z.boolean(),
      array: (type) => z.array(type), // If you need an array of a specific type
      object: (shape) => z.object(shape), // If you need an object with a specific shape
      any: () => z.any(),
      unknown: () => z.unknown(),
    };

    Object.entries(schema).forEach(([key, value]) => {
      if (knownSchema.includes(value?.type)) {
        if (value?.type) {
          const zodTypeFunction = zodTypeMapping[value?.type];
          console.log(zodTypeFunction["string"]);
          if (zodTypeFunction) {
            // Only proceed if a valid Zod method is found
            if (value?.required === true) {
              schemaObject[key] =
                zodTypeFunction()?.min(
                  1,
                  value?.message || "This field is required"
                ) ?? z.any().optional();
            } else {
              schemaObject[key] = zodTypeFunction()?.optional();
            }
          } else {
            console.warn(`Unknown type: ${value?.type} for key ${key}.`);
          }
        }
      } else {
        console.warn(`Type ${value?.type} is not recognized.`);
      }
    });
    console.log(schemaObject);
    return schemaObject;
  };

  SchemaBuilder(schema?.schema);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {Object.entries(schema).map(([key, value]) => (
          <div key={key}>
            <Controller
              name={key}
              control={control}
              render={({ field }) => <Input className="" {...field} />}
            />
          </div>
        ))}
      </div>
    </form>
  );
};
