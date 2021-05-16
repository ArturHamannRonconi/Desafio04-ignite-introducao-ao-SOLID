import { v4 as uuidV4 } from "uuid";

class User {
  public id: string;
  public name: string;
  public email: string;
  public admin: boolean;
  public created_at: Date;
  public updated_at: Date;

  constructor() {
    this.updated_at = new Date();

    if (!this.id) this.id = uuidV4();
    if (!this.admin) this.admin = false;
    if (!this.created_at) this.created_at = new Date();
  }
}

export { User };
