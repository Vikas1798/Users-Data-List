import AppWrapper from './Components/AppWrapper'
import useFetch from './Hooks/useFetch';
import { Table } from 'antd';

const App = () => {
    const { usersData, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
        },
    ];

    return (
        <div className='flex items-center justify-center lg:h-[100vh] bg-gray-200'>


            <AppWrapper>
                <div className='shadow-lg rounded-lg p-5  special-box-shadow bg-white'>
                    <h2 className='text-4xl font-bold text-[#000000] text-center'> Users List</h2>
                    <div className='mt-10 overflow-x-auto'>
                        <Table
                            columns={columns}
                            dataSource={usersData}
                            rowKey="id"
                            loading={loading}
                            pagination={{
                                pageSize: 4
                            }}
                        />
                    </div>
                </div>
            </AppWrapper>
        </div>
    )
}

export default App;


// -------- or ------

// import AppWrapper from './Components/AppWrapper'
// import useFetch from './Hooks/useFetch';
// import nodata from './Assets/Image/nodata.svg';
// import errorImg from './Assets/Image/error.svg';
// import { Table } from 'antd';

// const App = () => {
//     const { usersData, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

//     const columns = [
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             sorter: (a, b) => a.name.localeCompare(b.name),
//         },
//         {
//             title: 'Email',
//             dataIndex: 'email',
//             sorter: (a, b) => a.email.localeCompare(b.email),
//         },
//     ];

//     return (
//         <AppWrapper>
//             <div className='shadow-lg rounded-lg p-5 mt-10 special-box-shadow'>
//                 <h2 className='text-4xl font-bold text-[#fe7678] text-center'> Users List</h2>
//                 <div className='mt-10'>
//                     {
//                         error ?
//                             <div className='flex items-center justify-center flex-col'>
//                                 <img src={errorImg} alt="" className='w-[200px]' />
//                                 <h6 className='text-lg font-semibold  mt-3'>An error occurred</h6>
//                             </div>
//                             :
//                             loading ?
//                                 <>
//                                     {new Array(2)?.fill("_")?.map((a, i) => (
//                                         <div className="border border-[#f0f3f5] rounded-lg p-[10px] my-2 last:mb-0" key={i}>
//                                             <div className="h-[50px] opacity-[0.7] rounded-md skeleton"></div>
//                                         </div>
//                                     ))}
//                                 </>
//                                 : usersData?.length === 0 ?
//                                     <div className='flex items-center justify-center flex-col'>
//                                         <img src={errorImg} alt="" className='w-[200px]' />
//                                         <h6 className='text-lg font-semibold  mt-3'>No data found</h6>
//                                     </div>
//                                     :
//                                     <Table
//                                         columns={columns}
//                                         dataSource={usersData}
//                                         rowKey="id"
//                                         loading={loading}
//                                         pagination={{
//                                             pageSize: 4
//                                         }}
//                                     />
//                     }
//                 </div>
//             </div>
//         </AppWrapper>
//     )
// }

// export default App;
