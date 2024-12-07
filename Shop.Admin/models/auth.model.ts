import axios from "axios";
import { IAuthRequisites } from "@Shared/types";

export async function verifyRequisites(
  requisites: IAuthRequisites
): Promise<boolean> {
  try {
    const API_HOST = `http://${process.env.LOCAL_PATH}:${process.env.LOCAL_PORT}/${process.env.API_PATH}`;
    const { status } = await axios.post(
      `${API_HOST}/auth`,
      requisites
    );

    return status === 200;
  } catch (e) {
    return false;
  }
}