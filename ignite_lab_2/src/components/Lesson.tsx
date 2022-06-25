import React from "react";
import { CheckCircle, Lock } from "phosphor-react"
import { isPast, format } from "date-fns";
import ptBr from 'date-fns/locale/pt-BR';
import { Link, useParams } from "react-router-dom";
import classes from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export default function Lesson(props: LessonProps) {
  const {slug} = useParams<{slug: string}>()

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBr,
  })

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={classes('rounded border border-gray-500 p-4 mt-2', {
        'group-hover:border-green-600': props.type === 'live',
        'group-hover:border-orange-700': props.type !== 'live',
        "bg-green-500": isActiveLesson,
      })}>
        
        <header className={` flex items-center justify-between`}>
          {isLessonAvailable ? (
            <span className={classes("text-sm font-medium flex items-center gap-2", {
              "text-white" : isActiveLesson,
              "text-blue-500" : !isActiveLesson,
            })}>
              <CheckCircle size={20} />
              Conteudo liberado
            </span>    
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={classes("text-xs rounded py-[0.125rem] px-2 text-white border font-bold", {
            "border-white" : isActiveLesson,
            "border-green-300" : !isActiveLesson,
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'LIVE'}
          </span>
        </header>

        <strong className={classes(" mt-5 block", {
          "text-white": isActiveLesson,
          "text-gray-200": !isActiveLesson,
        })}>
          {props.title}
        </strong>

      </div>

    </Link>

  )
}
