export const PROJECT = [
  {
    id: "CP-22-3101",
    title: "Replacement of old PW from KTO to WTP RV",
    status: "Execution",
  },
  {
    id: "CP-22-3102",
    title: "TCOV HEATING NETWORK REPLACEMENT",
    status: "Execution",
  },
  {
    id: "CP-22-3103",
    title: "INST-N OF FLOW METERS ON GAS PIPEL IN IB",
    status: "On Hold",
  },
  {
    id: "CP-22-3105",
    title: "DB Fuel Storage Pipeline repair",
    status: "Active",
  },
  {
    id: "CP-22-3106",
    title: "Firefig-g waterline from OV to TCOV inst",
    status: "Execution",
  },
  {
    id: "CP-22-3107",
    title: "Internal FF waterline replacement in WTF",
    status: "Execution",
  },
  {
    id: "CP-22-3113",
    title: "Permanent FeCl3 injection unit ar WRF",
    status: "Execution",
  },
  {
    id: "CP-22-3118",
    title: "Shelters for high voltage motors",
    status: "Execution",
  },
  {
    id: "CP-22-3130",
    title: "TCOV Laundry connection to the SS-9",
    status: "Execution",
  },
  {
    id: "CP-22-3134",
    title: "BB Batch Plant & Gravel Yard Modernization",
    status: "Execution",
  },
  {
    id: "CP-22-3142",
    title: "Caspian Dike Repair",
    status: "Execution",
  },
  {
    id: "CP-22-3130",
    title: "NORTH & EAST RING",
    status: "Cancelled",
  },
  {
    id: "CP-22-3130",
    title: "TCO FIELD OFFICE UPGRADE",
    status: "Closed",
  },
  {
    id: "CP-22-3130",
    title: "RIPSERA NEW TWL TIE-IN",
    status: "Closed",
  },
  {
    id: "CP-22-3142",
    title: "Caspian Dike Repair",
    status: "Execution",
  },
  {
    id: "CP-22-3130",
    title: "NORTH & EAST RING",
    status: "Cancelled",
  },
  {
    id: "CP-22-3130",
    title: "TCO FIELD OFFICE UPGRADE",
    status: "Closed",
  },
  {
    id: "CP-22-3130",
    title: "RIPSERA NEW TWL TIE-IN",
    status: "Closed",
  },
];

export const WORK = [
  { name: "Evalution", percent: 10, color: "#4040A0" },
  { name: "Engineering", percent: 25, color: "#7F7FBF" },
  { name: "Execution", percent: 65, color: "#8BDFCE" },
];
export const WORK_CHART_OPTIONS = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: { enabled: false },
    legend: {
      labels: {
        padding: 10,
        usePointStyle: true,
        color: "white",
        font: { weight: "bold", size: 11 },
      },
    },
    datalabels: {
      color: "white",
      display: true,
      font: { weight: "bold" },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      stacked: true,
      display: false,
    },
    y: {
      grid: { display: false },
      stacked: true,
      display: false,
    },
  },
};
export const WORK_CHART_DATA = {
  labels: [""],
  datasets: WORK.map((work, idx) => ({
    label: work.name,
    data: [work.percent],
    backgroundColor: work.color,
    borderRadius:
      idx === WORK.length - 1
        ? { topRight: 8, bottomRight: 8 }
        : idx === 0
        ? { topLeft: 8, bottomLeft: 8 }
        : 0,
    borderSkipped: false,
    barPercentage: 0.5,
    categoryPercentage: 1,
  })),
};

export const BUDGET = [
  { name: "Asset Retained", percent: 61.95, color: "red" },
  { name: "ECO", percent: 40.6, color: "red" },
  { name: "EDN", percent: 71.36, color: "red" },
  { name: "EFF", percent: 63.14, color: "red" },
  { name: "EPF", percent: 67.63, color: "red" },
  { name: "BIF_Self", percent: 5.22, color: "red" },
  { name: "Pipelined", percent: 115.64, color: "yellow" },
  { name: "SCP Included", percent: 106.97, color: "#028A0F" },
  { name: "SCP RIM", percent: 90.93, color: "#028A0F" },
];
export const BUDGET_CHART_DATA = {
  labels: BUDGET.map((budget) => budget.name),
  datasets: [
    {
      data: BUDGET.map((budget) => budget.percent),
      backgroundColor: BUDGET.map((budget) => budget.color),
      borderRadius: 4,
      borderSkipped: false,
    },
  ],
};
export const BUDGET_CHART_OPTION = (bgColor)=>{
  return{
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: { display: true },
    legend: { display: false },
    tooltip: { enabled: false },
    datalabels: {
      anchor: "end",
      align: "end",
      clamp: false,
      display: true,
      color: bgColor,
      font: { weight: "bold", size: 12 },
      formatter: (value) => value.toFixed(2) + "%",
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        autoSkip: false,
        maxRotation: 0,
        color: bgColor,
        font: { weight: "bold" },
        callback: function (v) {
          const charWidth = 10;
          const label = this.getLabelForValue(v);
          const barWidth = Math.round(
            document.querySelector(".budget-chart canvas")?.clientWidth /
              BUDGET.length
          );
          const maxLabelChar = Math.floor(barWidth / charWidth) + 1;
          return label.length > maxLabelChar
            ? label.slice(0, maxLabelChar - 2) + "..."
            : label;
        },
      },
    },
    y: {
      grid: { display: false },
      display: false,
    },
  },
};
}

export const dropDown1 = [
  {
    value: "FACILITY",
    label: "FACILITY",
  },
];
export const dropDown2 = [
  {
    value: "CATEGORY",
    label: "CATEGORY",
  },
];

export const dropDown3 = [
  {
    value: "PHASE",
    label: "PHASE",
  },
];
