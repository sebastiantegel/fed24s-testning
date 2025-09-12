import { getPersons } from "./services/personService";

export const init = async () => {
  const persons = await getPersons();

  const ul = document.getElementById("persons");
  if (ul) {
    ul.innerHTML = "";
  }

  persons.forEach((p) => {
    const li = document.createElement("li");
    li.className = "person";
    li.innerHTML = p.name;
    ul?.appendChild(li);
  });
};
