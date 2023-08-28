import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const Traffic = () => {
  return (
    <Layout>
      <div className="pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 text-center">
              <h2 className="mb-35">COMING SOON ...</h2>
              <Link
                href="/"
                className="border-btn text-dark bg-warning border border-dark text-center ms-3 borderc-btn d-inline-flex"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Traffic;
