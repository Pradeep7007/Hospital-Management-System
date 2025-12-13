const rooms = [
  // General Ward Rooms
  { "roomType": "General Ward", "roomNo": "GW101", "floorNo": 1, "inChargeNurse": "Nurse A", "nursePhone": "94432-85896", "available": true },
  { "roomType": "General Ward", "roomNo": "GW102", "floorNo": 1, "inChargeNurse": "Nurse B", "nursePhone": "94432-45621", "available": false },
  { "roomType": "General Ward", "roomNo": "GW103", "floorNo": 1, "inChargeNurse": "Nurse C", "nursePhone": "94432-18745", "available": true },
  { "roomType": "General Ward", "roomNo": "GW104", "floorNo": 1, "inChargeNurse": "Nurse D", "nursePhone": "94432-85444", "available": true },
  { "roomType": "General Ward", "roomNo": "GW105", "floorNo": 1, "inChargeNurse": "Nurse E", "nursePhone": "94432-14505", "available": false },
  { "roomType": "General Ward", "roomNo": "GW106", "floorNo": 2, "inChargeNurse": "Nurse F", "nursePhone": "94432-14786", "available": true },
  { "roomType": "General Ward", "roomNo": "GW107", "floorNo": 2, "inChargeNurse": "Nurse G", "nursePhone": "97432-14567", "available": false },
  { "roomType": "General Ward", "roomNo": "GW108", "floorNo": 2, "inChargeNurse": "Nurse H", "nursePhone": "95832-11258", "available": true },
  { "roomType": "General Ward", "roomNo": "GW109", "floorNo": 2, "inChargeNurse": "Nurse I", "nursePhone": "91482-11479", "available": false },
  { "roomType": "General Ward", "roomNo": "GW110", "floorNo": 2, "inChargeNurse": "Nurse J", "nursePhone": "95632-85010", "available": true },

  // Semi-Private Rooms
  { "roomType": "Semi-Private", "roomNo": "S101", "floorNo": 1, "inChargeNurse": "Nurse K", "nursePhone": "94432-11114", "available": true },
  { "roomType": "Semi-Private", "roomNo": "S102", "floorNo": 1, "inChargeNurse": "Nurse L", "nursePhone": "94432-45789", "available": false },
  { "roomType": "Semi-Private", "roomNo": "S103", "floorNo": 1, "inChargeNurse": "Nurse M", "nursePhone": "94432-12456", "available": true },
  { "roomType": "Semi-Private", "roomNo": "S104", "floorNo": 1, "inChargeNurse": "Nurse N", "nursePhone": "94432-12344", "available": true },
  { "roomType": "Semi-Private", "roomNo": "S105", "floorNo": 2, "inChargeNurse": "Nurse O", "nursePhone": "94432-85815", "available": false },
  { "roomType": "Semi-Private", "roomNo": "S106", "floorNo": 2, "inChargeNurse": "Nurse P", "nursePhone": "94432-14216", "available": true },
  { "roomType": "Semi-Private", "roomNo": "S107", "floorNo": 2, "inChargeNurse": "Nurse Q", "nursePhone": "94432-11227", "available": false },
  { "roomType": "Semi-Private", "roomNo": "S108", "floorNo": 2, "inChargeNurse": "Nurse R", "nursePhone": "94432-14818", "available": true },
  { "roomType": "Semi-Private", "roomNo": "S109", "floorNo": 3, "inChargeNurse": "Nurse S", "nursePhone": "94432-10888", "available": true },
  { "roomType": "Semi-Private", "roomNo": "S110", "floorNo": 3, "inChargeNurse": "Nurse T", "nursePhone": "94432-11470", "available": false },

  // Private Rooms
  { "roomType": "Private", "roomNo": "P101", "floorNo": 1, "inChargeNurse": "Nurse U", "nursePhone": "94432-46021", "available": true },
  { "roomType": "Private", "roomNo": "P102", "floorNo": 1, "inChargeNurse": "Nurse V", "nursePhone": "94432-85822", "available": false },
  { "roomType": "Private", "roomNo": "P103", "floorNo": 2, "inChargeNurse": "Nurse W", "nursePhone": "94432-45623", "available": true },
  { "roomType": "Private", "roomNo": "P104", "floorNo": 2, "inChargeNurse": "Nurse X", "nursePhone": "94432-85824", "available": true },
  { "roomType": "Private", "roomNo": "P105", "floorNo": 3, "inChargeNurse": "Nurse Y", "nursePhone": "94432-15465", "available": false },

  // ICU Rooms
  { "roomType": "ICU", "roomNo": "ICU1", "floorNo": 1, "inChargeNurse": "Nurse Z", "nursePhone": "94432-15478", "available": true },
  { "roomType": "ICU", "roomNo": "ICU2", "floorNo": 1, "inChargeNurse": "Nurse AA", "nursePhone": "94432-75123", "available": false },
  { "roomType": "ICU", "roomNo": "ICU3", "floorNo": 2, "inChargeNurse": "Nurse BB", "nursePhone": "94432-42628", "available": true },
  { "roomType": "ICU", "roomNo": "ICU4", "floorNo": 2, "inChargeNurse": "Nurse CC", "nursePhone": "94432-89639", "available": false },
  { "roomType": "ICU", "roomNo": "ICU5", "floorNo": 3, "inChargeNurse": "Nurse DD", "nursePhone": "94432-47896", "available": true }
];

export default rooms;
