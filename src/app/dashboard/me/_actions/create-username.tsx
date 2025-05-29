"use server"

import type { error } from "console"
import { z } from "zod"

const createUsernameSchema = z.object({
    username: z.string({ message: "O username é obrigatório" }).min(4, "O username deve ter pelo menos 4 caracteres")
})

type CreateUsernameData = z.infer<typeof createUsernameSchema>

export async function createUsername(data: CreateUsernameData) {

    const schema = createUsernameSchema.safeParse(data)

    if (!schema.success) {
        console.log(schema)
        return {
            data: null,
            error: schema.error.issues[0].message,
        }
    }

    return {
        data: "USERNAE CRIADO",
        error: null,
    }
}
