import React from "react";
import Image from "../Image/Image";
import Images from "../../utils/images";
import { Link } from "react-router-dom";

const SocialMediaContainer = () => {
  return (
    <>
      <div className="card my-4 position-relative">
        <span className="position-absolute top-0 start-50 translate-middle bg-white p-2">
          OR
          <span className="visually-hidden">unread messages</span>
        </span>
      </div>
      <div className="d-flex justify-content-evenly social-signup">
        <div className="card w-25">
          <div className="card-body text-center">
            <Link to="/google" data-testid="google-link">
              <Image
                src={Images.googleIcon}
                width={30}
                height={30}
                className="img-responsive"
                altText="google icon"
              />
            </Link>
          </div>
        </div>
        <div className="card w-25">
          <div className="card-body text-center">
            <Link to='/linked-in' data-testid="linkedIn-link">
            <Image
              src={Images.linkedIcon}
              width={30}
              height={30}
              className="img-responsive"
              altText="LinkedIn Icon"
            />
            </Link>
          </div>
        </div>
        <div className="card w-25">
          <div className="card-body text-center">
          <Link to='/apple' data-testid="apple-link">
            <Image
              src={Images.appleIcon}
              width={30}
              height={30}
              className="img-responsive"
              altText="apple Icon"
            />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaContainer;
