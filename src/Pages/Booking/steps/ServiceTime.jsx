import { useDispatch, useSelector } from 'react-redux';
import { setCustomerData } from '../../../store';

export default function ServiceTime({bookingError}) {
const dispatch = useDispatch();
const customerData = useSelector((state) => state.customerData);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCustomerData({ ...customerData, [name]: value }));
  };

    return(
        <div className="flex flex-col ">
        <p className="text-red-500 font-bold"> * fields are mandatory</p>
      
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Service Required <span className="text-red-500 font-bold">*</span>
                    &nbsp; &nbsp; &nbsp;
                    {bookingError.category && <span className="text-red-500 text-xs mt-1">{bookingError.category}</span>}
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    
                    <select
                        onChange={handleChange}
                        value={customerData["category"] || ""}
                        name="category"
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

            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Date <span className="text-red-500 font-bold">*</span>
                    &nbsp; &nbsp; &nbsp;
                    {bookingError.date && <span className="text-red-500 text-xs mt-1">{bookingError.date}</span>}
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        type="date"
                        onChange={handleChange}
                        value={customerData["date"] || ""}
                        name="date"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>

            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Time Slot<span className="text-red-500 font-bold">*</span>
                    &nbsp; &nbsp; &nbsp;
                    {bookingError.timeSlot && <span className="text-red-500 text-xs mt-1">{bookingError.timeSlot}</span>}
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    
                    <select
                        onChange={handleChange}
                        value={customerData["timeSlot"] || ""}
                        name="timeSlot"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    >
                        <option value="">Select Time Slot</option>
                        <option value="1">8am - 10am</option>
                        <option value="2">10am - 12pm</option>
                        <option value="3">12pm - 2pm</option>
                        <option value="4">2pm - 4pm</option>
                    </select>

                </div>
            </div>

        </div>
    )
}