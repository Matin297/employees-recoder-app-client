import EmployeeItem from './employeeItem';

function HomePage() {

    // TODO -> Requests to get a list of employees to show

    return (
        <div>
            <ul>
                {FAKE_DATA.map(employee => <EmployeeItem key={employee._id} employee={employee} />)}
            </ul>
        </div>
    )
}

export default HomePage;

const FAKE_DATA = [
    {
        _id: "611a20efabc1136a29eec153",
        first_name: "Maloooooooooooooch",
        last_name: "Mir",
        role: "Backend Engineer"
    },
    {
        _id: "611a30f8f078501e1ced149a",
        first_name: "Solmaz",
        last_name: "Khosravi",
        role: "Fullstack Engineer"
    }
]