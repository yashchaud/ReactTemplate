import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Scroll,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import product from "@/images/product.jpg";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Dashboard from "@/images/darkbackground.jpg";
import { table } from "console";
import { useEffect } from "react";
export const description =
  "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.";

const tablesarray = [
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Luminous VR Headset",
    price: "$199.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Hypernova Headphones",
    price: "$129.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "TechTonic Energy Drink",
    price: "$2.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
  {
    name: "Ts is last",
    price: "$59.99",
    status: "Active",
    created: "2024-02-14 02:14 PM",
    actions: "Edit, Delete",
  },
];

export function TableComponent() {
  const [newTabblearry, setNewTabblearry] = useState([]);
  const fetchProjects = async ({ pageParam }) => {
    const pageSize = 10; // Number of items per page
    const startIndex = (pageParam - 1) * pageSize;
    const endIndex = pageParam * pageSize;

    const newItems = tablesarray.slice(startIndex, endIndex); // Use slice instead of splice
    setNewTabblearry((prev) => [...prev, ...newItems]); // Concatenate new items to the existing state

    console.log(newItems);
    return newItems;
  };
  const { ref, inView } = useInView();
  console.log(inView);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });
  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("inView");
      console.log(data);
      fetchNextPage();
    }
  }, [inView, hasNextPage]);
  if (error) return <div>failed to load</div>;

  return (
    <div className="flex min-h-screen w-full flex-col bg-lightps/40">
      {/*   */}
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="md:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  to="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  to="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="#">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="#">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-light pl-8 md:w-[200px] lg:w-[336px] border-[#3D3D3D]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full border-[#3D3D3D]"
              >
                <img
                  src={Dashboard}
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList className="bg-light">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1 bg-light border-[#3D3D3D]"
                    >
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-light">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 gap-1 bg-light border-[#3D3D3D]"
                >
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button
                  size="md"
                  className="h-9 gap-2 bg-accent text-black hover:bg-accent/90 "
                >
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card
                x-chunk="dashboard-06-chunk-0"
                className="max-h-[80vh] overflow-hidden bg-light border-0"
              >
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                  <CardDescription>
                    Manage your products and view their sales performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <ScrollArea className="w-full h-[80vh]">
                      <TableHeader>
                        <TableRow className="hover:bg-lightps">
                          <TableHead className="hidden w-[100px] sm:table-cell">
                            <span className="">Image</span>
                          </TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Price
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Total Sales
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Created at
                          </TableHead>
                          <TableHead>
                            <span className="sr-only">Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="h-full">
                        {data?.pages?.map((data, index) => {
                          return (
                            <React.Fragment key={index}>
                              {data.map((data, index) => {
                                return (
                                  <TableRow className="hover:bg-nav/50">
                                    <TableCell className="hidden sm:table-cell min-w-[200px]">
                                      <img
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src={product}
                                        width="64"
                                      />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                      {data.name}
                                    </TableCell>
                                    <TableCell>
                                      <Badge variant="outline">Active</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      $199.99
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      30
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      2024-02-14 02:14 PM
                                    </TableCell>
                                    <TableCell>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                          >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">
                                              Toggle menu
                                            </span>
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuLabel>
                                            Actions
                                          </DropdownMenuLabel>
                                          <DropdownMenuItem>
                                            Edit
                                          </DropdownMenuItem>
                                          <DropdownMenuItem>
                                            Delete
                                          </DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                            </React.Fragment>
                          );
                        })}
                        <div ref={ref} className="h-[100px]"></div>
                      </TableBody>
                    </ScrollArea>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
