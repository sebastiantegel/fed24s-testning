import axios from "axios";
import { Person } from "../models/Person";

export const getPersons = async (): Promise<Person[]> => {
  const response = await axios.get<Person[]>("...");

  return response.data;
};
