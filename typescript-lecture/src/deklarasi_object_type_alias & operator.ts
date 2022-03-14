type TLongitude = string | number;
type TRole = "admin" | "user" | "guest" | "superadmin";
type TRoleNumber = 0 | 1 | 2;
type TPerson = {
  firstName: string;
  lastName: string;
};
type TPersonWithRole = TPerson & {
  role: TRole;
};

const longitude: TLongitude = "123";
const role: TRole = "admin";

const personWithRole: TPersonWithRole = {
  firstName: "Sherlock",
  lastName: "Holmes",
  role: "admin",
};
