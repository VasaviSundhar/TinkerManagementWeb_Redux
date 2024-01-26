import { useDispatch, useSelector } from 'react-redux';
import { setCustomerData } from '../../../store';

export default function CustomerDetails({bookingError}) {
  const dispatch = useDispatch();
  const customerData = useSelector((state) => state.customerData);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCustomerData({ ...customerData, [name]: value }));
  };

  return (
    <div className="flex flex-col ">
      <p className="text-red-500 font-bold"> * fields are mandatory</p>
      
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          First Name <span className="text-red-500 font-bold">*</span>
          &nbsp; &nbsp; &nbsp;
          {bookingError.firstName && <span className="text-red-500 text-xs mt-1">{bookingError.firstName}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={customerData["firstName"] || ""}
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
          {bookingError.lastName && <span className="text-red-500 text-xs mt-1">{bookingError.lastName}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
              onChange={handleChange}
              value={customerData["lastName"] || ""}
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
          {bookingError.email && <span className="text-red-500 text-xs mt-1">{bookingError.email}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
              onChange={handleChange}
              value={customerData["email"] || ""}
              name="email"
              placeholder="john@doe.com"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Phone <span className="text-red-500 font-bold">*</span>
          &nbsp; &nbsp; &nbsp;
          {bookingError.phone && <span className="text-red-500 text-xs mt-1">{bookingError.phone}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
              onChange={handleChange}
              value={customerData["phone"] || ""}
              name="phone"
              placeholder="Ex: 1234567890"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Address <span className="text-red-500 font-bold">*</span>
          &nbsp; &nbsp; &nbsp;
          {bookingError.address && <span className="text-red-500 text-xs mt-1">{bookingError.address}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
              onChange={handleChange}
              value={customerData["address"] || ""}
              name="address"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Postal Code <span className="text-red-500 font-bold">*</span>
          &nbsp; &nbsp; &nbsp;
          {bookingError.postalCode && <span className="text-red-500 text-xs mt-1">{bookingError.postalCode}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
              onChange={handleChange}
              value={customerData["postalCode"] || ""}
              name="postalCode"
              placeholder="Ex:A1A 2A3"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Issue/Requirement Description <span className="text-red-500 font-bold">*</span>
          &nbsp; &nbsp; &nbsp;
          {bookingError.description && <span className="text-red-500 text-xs mt-1">{bookingError.description}</span>}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <textarea
              onChange={handleChange}
              value={customerData["description"] || ""}
              name="description"
              placeholder="Type your Issue/ Requirement details here..."
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      
    </div>
  );
}
