'use client'
import React, { useEffect, useRef, useState } from 'react'
import { SubTask, Task, User } from '@prisma/client'
import { useSearchParams } from 'next/navigation'
import { Button, Dialog, DropdownMenu, IconButton,Select } from '@radix-ui/themes'
import { IoIosMore } from 'react-icons/io'
import { BsBack, BsBackspace, BsInfoSquare } from 'react-icons/bs'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { TfiCalendar } from "react-icons/tfi";
import { BiBullseye } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import TextBox from '@/app/components/TextBox'
import TextList from '@/app/components/TextList'
import ButtonRound from '@/app/components/ButtonRound'
function ViewTasks() {
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const projectId = searchParams.get("pid");
  function getProgressStyle(progress: string) {
    switch (progress) {
      case 'NOT_STARTED':
        return 'text-red-500'; // Use your desired style for not started
      case 'IN_PROGRESS':
        return 'text-yellow-500'; // Use your desired style for in progress
      case 'FINISHED':
        return 'text-green-500'; // Use your desired style for finished
      default:
        return '';
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3000/api/task?pid=${projectId}`)
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
        } else {
          setError(`Error: ${response.status}`);
        }
      })
      .catch(err => {
        setError(`Error: ${err.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return <p>Loading...</p>; // Add a loading indicator
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message
  }

    return (
        <>
        <div className='flex justify-between items-center'>
            <div className='flex gap-5'>
            <div className='text-3xl hover:translate-x-1 duration-75 scale-105 active:scale-90' onClick={() => window.history.back()}>
                        <IoArrowBackCircleOutline></IoArrowBackCircleOutline>
                    </div>
                    <GoTasklist />    <h1 className='text-3xl font-semibold'> VIEW TASK</h1>
                  </div>
        </div>
        <div className="flex min-h-screen justify-center w-full">
                <div className="overflow-x-auto min-w-full">
                {
                        tasks.length === 0 ?
                            <div className=' h-full flex flex-col justify-center '>
                                <tr className='text-center self-center justify-center w-full py-10 text-lg bg-gradient-to-r from-gray-50 to bg-slate-50 rounded-lg'>
                                    there is No task there add some task 
                                </tr>
                            </div>
                            :
                            <table className="min-w-full bg-white shadow-md rounded-xl">
                            <thead className='bg-gray-50 border-b-2 border-gray-200'>
                              <tr>
                                <th className='w-34 p-3 text-sm font-semibold -tracking-wide text-left'>Name</th>
                                <th className='w-24 p-3 text-sm font-semibold -tracking-wide text-left'> <BiBullseye />Status</th>
                                <th className='w-32 p-3 text-sm font-semibold -tracking-wide text-left'>Assign</th>
                              </tr>
                            </thead>
                            <tbody className="text-blue-gray-900">
  {tasks?.map((myTask: Task, i) => (
    <React.Fragment key={i}>
      {/* Task row */}
      <tr className="border-b border-blue-gray-200">
        <td className='p-3 text-sm text-gray-700'>{myTask.title}</td>
        <td className='p-3 text-sm text-gray-700'>
          <span className={`p-1.5 text-xs font-medium uppercase tracking-wider ${getProgressStyle(myTask.progress)}`}>
            {myTask.progress}
          </span>
        </td>
        <td className='p-3 text-sm text-gray-700'></td>
      </tr>
      {/* Subtask table */}
      <tr>
        <td colSpan={3}>
          <table className="w-full">
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='w-34 p-3 text-sm font-semibold -tracking-wide text-left'>Subtask Name</th>
                <th className='w-24 p-3 text-sm font-semibold -tracking-wide text-left'>Subtask Status</th>
                <th className='w-32 p-3 text-sm font-semibold -tracking-wide text-left'>Assigned To</th>
              </tr>
            </thead>
            <tbody className="text-blue-gray-900">
              {myTask.SubTask?.map((subTask:SubTask, j) => (
                <tr key={j} className="border-b border-blue-gray-200">
                  <td className='p-3 text-sm text-gray-700'>{subTask.title}</td>
                  <td className='p-3 text-sm text-gray-700'>
                    <span className={`p-1.5 text-xs font-medium uppercase tracking-wider ${getProgressStyle(subTask.progress)}`}>
                      {subTask.progress}
                    </span>
                  </td>
                  <td className='p-3 text-sm text-gray-700'>
                    {/* Add logic to display assigned users for the subtask */}
                    {subTask.task.assignedTo?.map((user:User,k) => (
                      <span key={k}>{user.firstName}</span> // Replace 'name' with the actual property of the user
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </td>
      </tr>
    </React.Fragment>
  ))}
</tbody>
                          </table>
                    }
                </div>
            </div>
     
        </>
    )
}

export default ViewTasks
{/*    <table className='w-full'>
  <td className='p-3 text-sm text-gray-700'>{myTask.dueDate}</td>
    <th className='w-20 p-3 text-sm font-semibold -tracking-wide text-left' ><TfiCalendar />start date</th>
    <tbody className="text-blue-gray-900 divide-y divide-gray-100 pl-2">
      <tr>
        <td className='p-3 text-sm text-gray-700'></td>
        <td className='p-3 text-sm text-gray-700'></td>
        <td className='p-3 text-sm text-gray-700'>
          <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-orange rounded-lg bg-opacity-50'>IN_PROGRESS</span>
        </td>
        <td className='p-3 text-sm text-gray-700'></td>
      </tr>
      <tr>
        <td className='p-3 pl-8 text-sm text-gray-700'> {/* Add left padding 
        
      Child Name
        </td>
        <td className='p-3 pl-8 text-sm text-gray-700'> {/* Add left padding 
        Child Due date
        </td>
        <td className='p-3 pl-8 text-sm text-gray-700'> 
          <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-orange rounded-lg bg-opacity-50'>IN_PROGRESS</span>
        </td>
        <td className='p-3 pl-8 text-sm text-gray-700'> 
          Child Assign
        </td>
      </tr>
    </tbody>
  </table>*/}   