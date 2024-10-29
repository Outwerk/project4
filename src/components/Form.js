import React, { useRef, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Form() {
    const [merchanFullName, setMerchantFullName] = useState("")
    const [businessLegalName, setBusinessLegalName] = useState("")
    const [amountRequested, setAmountRequested] = useState("")
    const [email, setEmail] = useState("")
    const [industry, setIndustry] = useState("")
    const [businessStartDate, setBusinessStartDate] = useState(true)
    const [dateOfBirth, setDateOfBirth] = useState(true)
    const [EIN, setEIN] = useState("")
    const [businessAddress, setBusinessAddress] = useState("")
    const [socialSec, setSocialSec] = useState("")
    const [homeAddress, setHomeAddress] = useState("")
    const [purposeOfFund, setPurposeOfFunds] = useState("")
    const [ownerShip, setOwnerShip] = useState("")
    const [contactNo, setContactNo] = useState("")
    const [altContactNo, setAltContactNo] = useState("")

    // for Attachment
    const [attachment, setAttachment] = useState(null);
    const [message, setMessage] = useState('');

    const [loader, setLoader] = useState(false)

    const formRef = useRef()

        // Success Alert
        const showSuccessAlert = () => {
            Swal.fire({
                title: 'Thank You!',
                text: 'Your form Has Been Sent Successfully',
                icon: 'success',
                confirmButtonText: 'Okay',
                customClass: {
                    // icon:"text-blue-400",
                    popup: 'bg-white rounded-lg shadow-lg p-4',
                    title: 'text-xl font-bold text-gray-800',
                    content: 'text-gray-700',
                    confirmButton: 'px-12 py-2 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 hover:text-outline hover:outline-white '
                }
            });
        };
    
        // Error Alert
        const showErrorAlert = () => {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong.',
                icon: 'error',
                confirmButtonText: 'Try Again',
                customClass: {
                    popup: 'bg-white rounded-lg shadow-lg p-4',
                    title: 'text-xl font-bold text-red-600',
                    content: 'text-gray-700',
                    confirmButton: 'px-12 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                }
            });
        };


    // handling fileInput
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];

            if (validTypes.includes(file.type)) {
                setAttachment(file)
                setMessage("")
                // console.log(file)
            } else {
                setMessage('Invalid image/PDF.');
                setAttachment(null);
                document.getElementById('fileInput').value = '';
            }
        } else {
            setMessage('No file selected.');
        }
    };

     // Empty Fields 
     function emptyFields() {

        setMerchantFullName("");
        setBusinessLegalName("");
        setAmountRequested("");
        setEmail("");
        setBusinessStartDate("");
        setIndustry("");
        setBusinessAddress("");
        setEIN("");
        setSocialSec("");
        setDateOfBirth("");
        setPurposeOfFunds("");
        setHomeAddress("");
        setOwnerShip("");
        setContactNo("");
        setAltContactNo("");

        // Clearing Attachment
        setAttachment(null);
        setMessage('');
        document.getElementById('fileInput').value = '';


        setLoader(false)

    }

    // FUNCTION to send data To Backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)

        const formData = new FormData(formRef.current);

        try {
            const response = await axios.post("http://localhost:5000/api/sendEmail", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' 
                }
            })
            if (response.status === 200) {
                showSuccessAlert();
                emptyFields()
            } else {
                showErrorAlert();
                setLoader(false)
            }

        } catch (error) {
            console.error('Error:', error);
            showErrorAlert();
            setLoader(false)
        }
    };


    return (
        <div
            className="mx-2 md:mx-auto block max-w-2xl rounded-xl bg-[#111827] p-6 py-12  shadow-4 dark:bg-surface-dark">
            <h1 className="text-white mb-12 ">We'd love to hear from you! Whether you have a question about our services feel free to reach out to us using the form below.</h1>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* merchanFullName */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="merchanFullName"
                            name='merchanFullName'
                            value={merchanFullName}
                            onChange={(e) => setMerchantFullName(e.target.value)}
                            required
                        />
                        <label
                            htmlhtmlfor="merchanFullName"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${merchanFullName && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Merchan FullName
                        </label>
                    </div>
                    {/* businessLegalName */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="businessLegalName"
                            name='businessLegalName'
                            value={businessLegalName}
                            onChange={(e) => setBusinessLegalName(e.target.value)}
                            required

                        />
                        <label
                            htmlfor="businessLegalName"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${businessLegalName && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Business Legal Name
                        </label>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Amount Requested */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="amountRequested"
                            name='amountRequested'
                            value={amountRequested}
                            onChange={(e) => setAmountRequested(e.target.value)}
                            required
                        />
                        <label
                            htmlhtmlfor="amountRequested"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${amountRequested && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Amount Requested
                        </label>
                    </div>
                    {/* Email */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="email"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label
                            htmlfor="email"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${email && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Email
                        </label>
                    </div>

                    {/* industry */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="industry"
                            name='industry'
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            required
                        />
                        <label
                            htmlfor="industry"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${email && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Industry
                        </label>
                    </div>
                </div>




                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Business startData */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="date"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="businessStartDate"
                            name='businessStartDate'
                            value={businessStartDate}
                            onChange={(e) => setBusinessStartDate(e.target.value)}
                            required
                        />
                        <label
                            htmlfor="businessStartDate"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${businessStartDate && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Business Start Date
                        </label>
                    </div>
                    {/* Date OF Birth */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="date"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="dateOfBirth"
                            name='dateOfBirth'
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                        />
                        <label
                            htmlfor="dateOfBirth"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${dateOfBirth && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Date Of Birth
                        </label>
                    </div>

                    {/* EIN */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="EIN"
                            name='EIN'
                            value={EIN}
                            onChange={(e) => setEIN(e.target.value)}
                            required
                        />
                        <label
                            htmlfor="EIN"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${EIN && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >EIN
                        </label>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Business Address */}
                    <div className="relative mb-8 col-span-2" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="businessAddress"
                            name='businessAddress'
                            value={businessAddress}
                            onChange={(e) => setBusinessAddress(e.target.value)}
                            required
                        />
                        <label
                            htmlhtmlfor="businessAddress"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${businessAddress && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Business Address
                        </label>
                    </div>
                    {/* socialSec */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="socialSec"
                            name='socialSec'
                            value={socialSec}
                            onChange={(e) => setSocialSec(e.target.value)}
                            required />
                        <label
                            htmlfor="socialSec"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${socialSec && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Social Sec
                        </label>
                    </div>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Home Address */}
                    <div className="relative col-span-2 mb-8" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="homeAddress"
                            name='homeAddress'
                            value={homeAddress}
                            onChange={(e) => setHomeAddress(e.target.value)}
                            required
                        />
                        <label
                            htmlfor="homeAddress"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${homeAddress && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Home Address
                        </label>
                    </div>


                    {/* Purpose of Fund */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="purposeOfFund"
                            name='purposeOfFund'
                            value={purposeOfFund}
                            onChange={(e) => setPurposeOfFunds(e.target.value)}
                            required
                        />
                        <label
                            htmlfor="purposeOfFund"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${purposeOfFund && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Purpose of Fund
                        </label>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* ownerShip */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="ownerShip"
                            name='ownerShip'
                            value={ownerShip}
                            onChange={(e) => setOwnerShip(e.target.value)}
                            required
                        />
                        <label
                            htmlhtmlfor="ownerShip"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${ownerShip && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >OwnerShip
                        </label>
                    </div>
                    {/* Contact  */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="contactNo"
                            name='contactNo'
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                            required
                        />
                        <label
                            htmlfor="contactNo"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${contactNo && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Contact No
                        </label>
                    </div>

                    {/* Alt Contact */}
                    <div className="relative mb-8" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.30rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border border-white"
                            id="altContactNo"
                            name='altContactNo'
                            value={altContactNo}
                            onChange={(e) => setAltContactNo(e.target.value)}
                            required
                        />
                        <label
                            htmlfor="altContactNo"
                            className={`"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${altContactNo && "-translate-y-[1.6rem] scale-[0.8]"} peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary rounded-lg"`}
                        >Alt Contact No
                        </label>
                    </div>
                </div>


                <div className='flex justify-between items-center'>
                    <div className='flex flex-col sm:flex-row gap-3 text-[15px] text-white'>
                        <h2>Attachment</h2>
                        <input
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={handleFileChange}
                            name='attachment'
                            id='fileInput'
                        />
                        <div>{message}</div>
                    </div>

                    <button
                        type="submit"
                        className="inline-block w-fit rounded bg-primary px-6 pb-2 pt-2.5 text-sm  uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong bg-[#D7D7DD] text-black font-bold"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                         {loader ?
                                    <div className="loader border-t-4 border-b-4 border-black rounded-full w-7 h-8 animate-spin"></div>
                                    :
                                    <>Submit</>}
                    </button>
                </div>
            </form>
        </div>
    )
}
