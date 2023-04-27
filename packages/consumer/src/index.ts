import { createClient } from "@my-org/client";

const client = createClient();

export const test = async () => {
  const { data, error } = await client.query({
    operationName: "users/get",
    input: {
      id: "1",
    },
  });

  return data?.name;
};
