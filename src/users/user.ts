export class User {
    readonly id: number
    readonly name: string
    readonly email: string
}

export class UserRequest {
    readonly user_metadata: UserMetadata
}

export class UserMetadata {
    readonly id: number
}