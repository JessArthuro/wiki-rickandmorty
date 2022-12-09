import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import style from "./Card.module.scss";

function CardDetailsSkeleton() {
  return (
    <div
      className={`${style.card_details} d-flex flex-column flex-md-row justify-content-start mb-5`}
    >
      <div>
        <Skeleton className={`${style.skeleton_img}`} height={300} />
      </div>
      <div className="px-3 pt-3 ps-md-4">
        <Skeleton className={`${style.skeleton_name}`} height={40} />
        <Skeleton className={`${style.skeleton_status} mt-2`} height={20} />
        <Skeleton className={`${style.skeleton_info} mt-4`} height={20} />
        <Skeleton className={`${style.skeleton_info} mt-3`} height={20} />
        <Skeleton className={`${style.skeleton_info} mt-3`} height={20} />
        <Skeleton className={`${style.skeleton_info} mt-3 mb-4`} height={20} />
      </div>
    </div>
  );
}

export default CardDetailsSkeleton;
