"use client";

import React from "react";

const GetLsData = (name) => {
  return localStorage.getItem(name);
};

export default GetLsData;
