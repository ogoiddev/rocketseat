import { gql, useQuery } from "@apollo/client";
import Lesson from "./Lesson";


const GET_LESSON_QUERY = gql`
    query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      slug
      title
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class';
  }[]
}

export default function SideBar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSON_QUERY)

  console.log(data);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-1"> 
      <span className="font-bold text-2x1 pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => 
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
        )}
      </div>

    </aside >
  )
}