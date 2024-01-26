import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../../store';

export default function Details({clientError}) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserData({ ...userData, [name]: value }));
  };

  return (
    <div className="flex flex-col ">
      <p className="text-red-500 font-bold"> * fields are mandatory</p>
      
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          First Name <span className="text-red-500 font-bold">*</span>
          &nbsp; &nbsp; &nbsp;
          {clientError.firstName && <span className="text-red-500 text-xs mt-1">{clientError.firstName}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["firstName"] || ""}
            name="firstName"
            placeholder="First Name"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Last Name <span className="text-red-500 font-bold">*</span>
          &nbsp; &nbsp; &nbsp;
          {clientError.lastName && <span className="text-red-500 text-xs mt-1">{clientError.lastName}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["lastName"] || ""}
            name="lastName"
            placeholder="Last Name"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Email <span className="text-red-500 font-bold">*</span>
          &nbsp; &nbsp; &nbsp;
          {clientError.email && <span className="text-red-500 text-xs mt-1">{clientError.email}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["email"] || ""}
            name="email"
            placeholder="Ex: john@doe.com"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Phone Number <span className="text-red-500 font-bold">*</span>
          &nbsp; &nbsp; &nbsp;
          {clientError.phone && <span className="text-red-500 text-xs mt-1">{clientError.phone}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["phone"] || ""}
            name="phone"
            placeholder="Ex: 1234567890"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
     
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Address
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["address"] || ""}
            name="address"
            placeholder="Address"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Service Category <span className="text-red-500 font-bold">*</span>
          &nbsp; &nbsp; &nbsp;
          {clientError.category && <span className="text-red-500 text-xs mt-1">{clientError.category}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <select
            onChange={handleChange}
            value={userData["category"] || ""}
            name="category"
            placeholder="Ex: 1234567890"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          >
            <option value="">Select Category</option>
            <option value="1">Plumbing</option>
            <option value="2">Electrician</option>
            <option value="3">Lawn Maintenance</option>
            <option value="4">AC and Heat Maintenance</option>
          </select>
        </div>
      </div>
    </div>
  );
}
