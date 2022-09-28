function getFullName () {
  return [this.firstName, this.lastName]
    .filter(Boolean)
    .join(" ")
}

export function createAuthor ({ 
  id,
  firstName,
  lastName,
  imageUrl,
  location,
}) {
  return {
    id, 
    firstName, 
    lastName,
    imageUrl,
    location,
    getFullName,
  };
}