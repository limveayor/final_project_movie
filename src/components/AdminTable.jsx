import {
  Avatar,
  Button,
  Card,
  CardFooter,
  IconButton,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = ["No", "Title", "Description", "Date", "Status"];

const TABLE_ROWS = [
  {
    id: "1",
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    title: "John Michael",
    description: "Manager",
    date: "23/04/18",
  },
  {
    id: "2",
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    title: "Alexa Liras",
    description: "Developer",
    date: "23/04/18",
  },
  {
    id: "3",
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    title: "Laurent Perrier",
    description: "Executive",
    date: "19/09/17",
  },
  {
    id: "4",
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    title: "Michael Levi",
    description: "Developer",
    date: "24/12/08",
  },
  {
    id: "5",
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    title: "Richard Gran",
    description: "Manager",
    date: "04/10/21",
  },
];

export function AdminTable() {
  return (
    <Card className="h-full w-full overflow-scroll bg-gray-500">
      <table className="w-full min-w-max table-auto text-left">
        <thead className=" bg-primary text-white">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" bg-gray-500 text-white">
          {TABLE_ROWS.map(({ id, img, title, description, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={id}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id}
                  </Typography>
                </td>
                <td className={`${classes} flex gap-2`}>
                  <Avatar
                    src={img}
                    alt=""
                    size="md"
                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                  />
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal mt-3"
                  >
                    {title}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {description}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4 bg-gray-500">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
