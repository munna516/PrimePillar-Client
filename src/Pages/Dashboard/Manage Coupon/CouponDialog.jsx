import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import toast from "react-hot-toast";

const CouponDialog = ({refetch}) => {
  const axiosPrivate = useAxiosPrivate();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = e.target.code.value;
    const discount = e.target.discount.value;
    const description = e.target.description.value;
    const coupon = {
      code,
      discount,
      description,
    };
    const { data } = await axiosPrivate.post("/coupons", coupon);
    if (data?.insertedId) {
      toast.success("Coupon added Successfully!!");
      e.target.reset();
      setIsOpen(false);
      refetch()
    } else {
      toast.error("Someting Went wrong");
    }
  };
  return (
    <>
      <div className=" ">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-dark-blue px-4 py-2  font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Add Coupon
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center leading-6 text-gray-900"
                  >
                    Coupon Form
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit}>
                      <div className="w-full">
                        <label className="form-control w-full">
                          <div className="label">
                            <span className="label-text font-semibold">
                              Coupon Code
                            </span>
                          </div>
                          <input
                            type="text"
                            name="code"
                            placeholder="coupon-code"
                            className="input input-bordered "
                            required
                          />
                        </label>
                      </div>
                      <div className="w-full">
                        <label className="form-control w-full">
                          <div className="label">
                            <span className="label-text font-semibold">
                              Discount Percentage
                            </span>
                          </div>
                          <input
                            type="number"
                            name="discount"
                            placeholder="discount"
                            className="input input-bordered "
                            required
                          />
                        </label>
                      </div>
                      <div className="w-full">
                        <label className="form-control w-full">
                          <div className="label">
                            <span className="label-text font-semibold">
                              Description
                            </span>
                          </div>
                          <textarea
                            type="text"
                            name="description"
                            rows={4}
                            placeholder="Description"
                            className="textarea textarea-bordered"
                            required
                          />
                        </label>
                      </div>
                      <input
                        className="mt-4 inline-flex justify-center rounded-md border cursor-pointer border-transparent text-white bg-dark-blue px-4 py-2 text-sm font-medium "
                        type="submit"
                        value="Submit"
                      />
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CouponDialog;
