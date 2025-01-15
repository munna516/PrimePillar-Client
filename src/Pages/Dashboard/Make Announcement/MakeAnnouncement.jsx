import { format } from "date-fns";
import Space from "../../../Components/Space/Space";
import Button from "../../../Components/Shared/Button";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const MakeAnnouncement = () => {
  const axiosPublic = useAxiosPublic();
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const dates = new Date();
    const date = format(dates, "dd-MM-yyyy");
    const announcement = {
      title,
      description,
      date,
    };
    axiosPublic.post("/announcements", announcement).then((res) => {
      if (res?.data.acknowledged) {
        toast.success("Announcement Posted Successfully");
        e.target.reset();
      }
    });
  };
  return (
    <div>
      <h1 className="text-center font-bold text-xl text-dark-blue md:text-2xl lg:text-3xl">
        Make An Announcement
      </h1>
      <Space></Space>

      <div className=" border-2 rounded-2xl">
        <div className="card bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                rows={4}
                name="description"
                className="textarea textarea-bordered"
                placeholder="write announcement"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <Button text="Publish" full={true}></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
