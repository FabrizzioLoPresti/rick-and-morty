import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/useReduxStore";

type Props = {};

const Paginator = (props: Props) => {
  const { page, pages } = useAppSelector((state) => state.characters);
  const router = useRouter();

  const handlePrevious = () => {
    if (page > 1) {
      router.push(`/?page=${page - 1}`);
    }
  };

  const handleNext = () => {
    if (pages && page < pages) {
      router.push(`/?page=${page + 1}`);
    }
  };

  const paginatorItems = [];

  if (pages) {
    if (pages <= 7) {
      for (let i = 1; i <= pages; i++) {
        const isCurrentPage = page === i;
        paginatorItems.push(
          <Link
            href={`/?page=${i}`}
            key={i}
            className={`${
              isCurrentPage ? "bg-gray-800 text-white" : "bg-gray-200"
            } px-5 py-3 rounded-md`}
          >
            {i}
          </Link>
        );
      }
    } else {
      if (page <= 4) {
        for (let i = 1; i <= 4; i++) {
          const isCurrentPage = page === i;
          paginatorItems.push(
            <Link
              href={`/?page=${i}`}
              key={i}
              className={`${
                isCurrentPage ? "bg-gray-800 text-white" : "bg-gray-200"
              } px-5 py-3 rounded-md`}
            >
              {i}
            </Link>
          );
        }
        paginatorItems.push(
          <span key={-1} className="px-5 py-3 rounded-md">
            ...
          </span>
        );
        paginatorItems.push(
          <Link
            href={`/?page=${pages}`}
            key={pages}
            className="bg-gray-200 px-5 py-3 rounded-md"
          >
            {pages}
          </Link>
        );
      } else if (page >= pages - 3) {
        paginatorItems.push(
          <Link
            href={`/?page=1`}
            key={1}
            className="bg-gray-200 px-5 py-3 rounded-md"
          >
            1
          </Link>
        );
        paginatorItems.push(
          <span key={-1} className="px-5 py-3 rounded-md">
            ...
          </span>
        );
        for (let i = pages - 3; i <= pages; i++) {
          const isCurrentPage = page === i;
          paginatorItems.push(
            <Link
              href={`/?page=${i}`}
              key={i}
              className={`${
                isCurrentPage ? "bg-gray-800 text-white" : "bg-gray-200"
              } px-5 py-3 rounded-md`}
            >
              {i}
            </Link>
          );
        }
      } else {
        paginatorItems.push(
          <Link
            href={`/?page=1`}
            key={1}
            className="bg-gray-200 px-5 py-3 rounded-md"
          >
            1
          </Link>
        );
        paginatorItems.push(
          <span key={-1} className="px-5 py-3 rounded-md">
            ...
          </span>
        );
        for (let i = page - 1; i <= page + 1; i++) {
          const isCurrentPage = page === i;
          paginatorItems.push(
            <Link
              href={`/?page=${i}`}
              key={i}
              className={`${
                isCurrentPage ? "bg-gray-800 text-white" : "bg-gray-200"
              } px-5 py-3 rounded-md`}
            >
              {i}
            </Link>
          );
        }
        paginatorItems.push(
          <span key={-2} className="px-5 py-3 rounded-md">
            ...
          </span>
        );
        paginatorItems.push(
          <Link
            href={`/?page=${pages}`}
            key={pages}
            className="bg-gray-200 px-5 py-3 rounded-md"
          >
            {pages}
          </Link>
        );
      }
    }
  }

  return (
    <div className="flex justify-center items-center gap-5 my-5">
      <button
        className="bg-gray-800 text-white px-5 py-3 rounded-md"
        onClick={handlePrevious}
        disabled={page <= 1}
      >
        {"<"}
      </button>
      {paginatorItems}
      <button
        className="bg-gray-800 text-white px-5 py-3 rounded-md"
        onClick={handleNext}
        disabled={!pages || page >= pages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Paginator;
