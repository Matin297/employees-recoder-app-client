import EmployeesPage from "pages/employees/employees";
import CreateEmployeePage from "pages/create-employee/create-employee";
import EditEmployeePage from "pages/edit-employee/edit-employee";

type LayoutType = {
  DASHBOARD: "DASHBOARD";
};

export const Layout: LayoutType = {
  DASHBOARD: "DASHBOARD",
};

type Route = {
  component: any;
  path: string;
  exact?: boolean;
  title?: string;
  layout?: keyof LayoutType;
};

const routes: Route[] = [
  {
    component: EmployeesPage,
    path: "/",
    exact: true,
    title: "Employees",
    layout: Layout.DASHBOARD,
  },
  {
    component: CreateEmployeePage,
    path: "/create-employee",
    title: "Create New Employees",
    layout: Layout.DASHBOARD,
  },
  {
    component: EditEmployeePage,
    path: "/:id/edit",
    layout: Layout.DASHBOARD,
  },
];

export default routes;
