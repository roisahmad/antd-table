"use client";

import { Table } from "antd";

import type { ColumnsType } from "antd/es/table";

interface VehicleData {
  id: string;
  type: string;
  lockUnlock: string;
  currentSpeed: string;
  batteryLevel: string;
  status: string;
  location: string;
  lastUpdated: string;
}

export default function Home() {
  const data: VehicleData[] = [
    {
      id: "132456",
      type: "Scooter",
      lockUnlock: "Lock",
      currentSpeed: "0 km/h",
      batteryLevel: "100%",
      status: "PARKING",
      location: "3.142,12",
      lastUpdated: "2019-07-02 9:00AM",
    },
    {
      id: "987654",
      type: "Scooter",
      lockUnlock: "Unlock",
      currentSpeed: "0 km/h",
      batteryLevel: "75%",
      status: "MOVING",
      location: "2.125,34",
      lastUpdated: "2019-07-02 10:00AM",
    },
    {
      id: "569925",
      type: "Scooter",
      lockUnlock: "Unlock",
      currentSpeed: "0 km/h",
      batteryLevel: "50%",
      status: "IDLING",
      location: "5.193,39",
      lastUpdated: "2019-07-02 9:00AM",
    },
    {
      id: "125864",
      type: "Scooter",
      lockUnlock: "Lock",
      currentSpeed: "0 km/h",
      batteryLevel: "15%",
      status: "TOWING",
      location: "2.423,12",
      lastUpdated: "2019-07-02 9:00AM",
    },
    {
      id: "125673",
      type: "Scooter",
      lockUnlock: "Lock",
      currentSpeed: "0 km/h",
      batteryLevel: "0%",
      status: "TOWING",
      location: "4.324,53",
      lastUpdated: "2019-07-02 9:00AM",
    },
  ];

  const columns: ColumnsType<VehicleData> = [
    {
      title: "Vehicle ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      sorter: (a, b) => a.type.localeCompare(b.type),
    },
    {
      title: "Lock/Unlock",
      dataIndex: "lockUnlock",
      key: "lockUnlock",
      sorter: (a, b) => a.lockUnlock.localeCompare(b.lockUnlock),
    },
    {
      title: "Current Speed",
      dataIndex: "currentSpeed",
      key: "currentSpeed",
      sorter: (a, b) => a.currentSpeed.localeCompare(b.currentSpeed),
    },
    {
      title: "Battery Level",
      dataIndex: "batteryLevel",
      key: "batteryLevel",
      sorter: (a, b) => a.batteryLevel.localeCompare(b.batteryLevel),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      sorter: (a, b) => a.location.localeCompare(b.location),
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
      sorter: (a, b) => a.lastUpdated.localeCompare(b.lastUpdated),
    },
  ];
  return (
    <div>
      <div className="w-full bg-[#7addae] p-8 text-center text-gray-800 text-3xl font-bold">
        Vehicle Management
      </div>

      <div className="w-full flex items-center justify-end my-8 px-8">
        <button className="rounded-full bg-[#7addae] px-4 py-2 space-x-2 flex items-center">
          <span className="text-black text-xl">+</span>
          <span className="text-black">New Vehicle</span>
        </button>
      </div>

      <div>
        <Table columns={columns} dataSource={data} />;
      </div>
    </div>
  );
}
