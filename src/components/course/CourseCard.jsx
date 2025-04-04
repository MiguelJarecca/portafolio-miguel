
export const CourseCard = ({course}) => {

    return (
        <div className="border rounded-lg shadow-lg p-4 w-72">
          <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded" />
          <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
          <p className="text-sm text-gray-600">{course.instructor}</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500">★ {course.rating}</span>
            <span className="text-gray-500 text-sm ml-2">({course.reviews} reviews)</span>
          </div>
          <p className="font-bold mt-2">{course.price}</p>
        </div>
      );
}