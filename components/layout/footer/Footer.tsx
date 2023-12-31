import LocationIcon from "@/components/icons/location";

export default function Footer() {
  return (
    <div className=" fixed bottom-0 w-full bg-black">
      <div className=" container px-4 py-4 mx-auto flex items-center justify-between">
        <div className=" inline-flex">
          <LocationIcon />
          <span className=" text-white text-xs font-bold px-2">Ohio, US</span>
          <div className=" text-gray-300 text-xs px-6">
            © 2023 All Rights Reserved
          </div>
        </div>
        <div className=" text-gray-300 text-xs">CSE5234</div>
      </div>
    </div>
  );
}
