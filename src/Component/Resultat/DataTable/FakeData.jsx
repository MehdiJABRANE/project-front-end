const sampleData = [
    {
        number: 1,
        accountName: "Company A",
        email: "companyA@example.com",
        assignedTo: "John Doe",
        montante: "$1000",
        age: 35,
        type: "Business",
        date: "2024-03-01",
        address: "123 Main St, City",
        phoneNumber: "(555) 123-4567",
        status: "Active"
    },
    {
        number: 2,
        accountName: "Company B",
        email: "companyB@example.com",
        assignedTo: "Jane Smith",
        montante: "$500",
        age: 28,
        type: "Individual",
        date: "2024-02-15",
        address: "456 Oak St, Town",
        phoneNumber: "(555) 987-6543",
        status: "Inactive"
    },
    {
        number: 3,
        accountName: "Company C",
        email: "companyC@example.com",
        assignedTo: "Alice Johnson",
        montante: "$2000",
        age: 42,
        type: "Business",
        date: "2024-03-05",
        address: "789 Elm St, Village",
        phoneNumber: "(555) 555-5555",
        status: "Active"
    },
    {
        number: 4,
        accountName: "Company D",
        email: "companyD@example.com",
        assignedTo: "Bob Brown",
        montante: "$1500",
        age: 31,
        type: "Individual",
        date: "2024-02-20",
        address: "101 Pine St, Suburb",
        phoneNumber: "(555) 222-3333",
        status: "Inactive"
    },
    {
        number: 5,
        accountName: "Company E",
        email: "companyE@example.com",
        assignedTo: "Emily White",
        montante: "$300",
        age: 40,
        type: "Business",
        date: "2024-03-10",
        address: "222 Maple St, Town",
        phoneNumber: "(555) 444-5555",
        status: "Active"
    },
    {
        number: 6,
        accountName: "Company F",
        email: "companyF@example.com",
        assignedTo: "Frank Green",
        montante: "$750",
        age: 29,
        type: "Individual",
        date: "2024-02-25",
        address: "333 Oak St, City",
        phoneNumber: "(555) 666-7777",
        status: "Inactive"
    },
    {
        number: 7,
        accountName: "Company G",
        email: "companyG@example.com",
        assignedTo: "Grace Brown",
        montante: "$1200",
        age: 36,
        type: "Business",
        date: "2024-03-03",
        address: "444 Cedar St, Village",
        phoneNumber: "(555) 888-9999",
        status: "Active"
    },
    {
        number: 8,
        accountName: "Company H",
        email: "companyH@example.com",
        assignedTo: "Henry Black",
        montante: "$950",
        age: 33,
        type: "Individual",
        date: "2024-02-18",
        address: "555 Elm St, Suburb",
        phoneNumber: "(555) 111-2222",
        status: "Inactive"
    },
    {
        number: 9,
        accountName: "Company I",
        email: "companyI@example.com",
        assignedTo: "Ivy Gray",
        montante: "$1800",
        age: 45,
        type: "Business",
        date: "2024-03-08",
        address: "666 Oak St, City",
        phoneNumber: "(555) 333-4444",
        status: "Active"
    },
    {
        number: 10,
        accountName: "Company J",
        email: "companyJ@example.com",
        assignedTo: "Jack White",
        montante: "$200",
        age: 27,
        type: "Individual",
        date: "2024-02-22",
        address: "777 Pine St, Town",
        phoneNumber: "(555) 555-6666",
        status: "Inactive"
    },
    {
        number: 11,
        accountName: "Company K",
        email: "companyK@example.com",
        assignedTo: "Karen Smith",
        montante: "$2200",
        age: 39,
        type: "Business",
        date: "2024-03-07",
        address: "888 Maple St, Village",
        phoneNumber: "(555) 777-8888",
        status: "Active"
    },
    {
        number: 12,
        accountName: "Company L",
        email: "companyL@example.com",
        assignedTo: "Larry Johnson",
        montante: "$1600",
        age: 30,
        type: "Individual",
        date: "2024-02-24",
        address: "999 Oak St, Suburb",
        phoneNumber: "(555) 999-0000",
        status: "Inactive"
    },
    {
        number: 13,
        accountName: "Company M",
        email: "companyM@example.com",
        assignedTo: "Mary Green",
        montante: "$1300",
        age: 37,
        type: "Business",
        date: "2024-03-02",
        address: "111 Cedar St, City",
        phoneNumber: "(555) 123-4567",
        status: "Active"
    },
    {
        number: 14,
        accountName: "Company N",
        email: "companyN@example.com",
        assignedTo: "Nick Brown",
        montante: "$850",
        age: 32,
        type: "Individual",
        date: "2024-02-19",
        address: "222 Elm St, Town",
        phoneNumber: "(555) 234-5678",
        status: "Inactive"
    },
    {
        number: 15,
        accountName: "Company O",
        email: "companyO@example.com",
        assignedTo: "Olivia Gray",
        montante: "$2400",
        age: 41,
        type: "Business",
        date: "2024-03-06",
        address: "333 Maple St, Village",
        phoneNumber: "(555) 345-6789",
        status: "Active"
    },
    {
        number: 16,
        accountName: "Company P",
        email: "companyP@example.com",
        assignedTo: "Paul White",
        montante: "$100",
        age: 26,
        type: "Individual",
        date: "2024-02-21",
        address: "444 Pine St, City",
        phoneNumber: "(555) 456-7890",
        status: "Inactive"
    },
    {
        number: 17,
        accountName: "Company Q",
        email: "companyQ@example.com",
        assignedTo: "Quincy Black",
        montante: "$2000",
        age: 38,
        type: "Business",
        date: "2024-03-09",
        address: "555 Cedar St, Town",
        phoneNumber: "(555) 567-8901",
        status: "Active"
    },
    {
        number: 18,
        accountName: "Company R",
        email: "companyR@example.com",
        assignedTo: "Rachel Johnson",
        montante: "$1700",
        age: 29,
        type: "Individual",
        date: "2024-02-26",
        address: "666 Elm St, Village",
        phoneNumber: "(555) 678-9012",
        status: "Inactive"
    },
    {
        number: 19,
        accountName: "Company S",
        email: "companyS@example.com",
        assignedTo: "Sam Green",
        montante: "$1900",
        age: 43,
        type: "Business",
        date: "2024-03-04",
        address: "777 Maple St, Suburb",
        phoneNumber: "(555) 789-0123",
        status: "Active"
    },
    {
        number: 20,
        accountName: "Company T",
        email: "companyT@example.com",
        assignedTo: "Tom Brown",
        montante: "$1100",
        age: 34,
        type: "Individual",
        date: "2024-02-23",
        address: "888 Oak St, City",
        phoneNumber: "(555) 890-1234",
        status: "Inactive"
    }
];
export const FakeData = sampleData;