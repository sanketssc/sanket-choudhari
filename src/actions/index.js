"use server";

export const handleFormSubmit = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(name, email, message);
  const res = await fetch("https://formspree.io/f/maygodqb", {
    method: "POST",
    body: JSON.stringify({ name: name, email: email, message: message }),
    headers: {
      Accept: "application/json",
    },
  });
  console.log(res);
  return res.status === 200 ? "success" : "error";
};
