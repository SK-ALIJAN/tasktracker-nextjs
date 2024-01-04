"use client";

import React from "react";

const SetLsData = (name, value) => {
  localStorage.setItem(name, value);
};

export default SetLsData;
