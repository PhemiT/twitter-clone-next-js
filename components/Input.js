import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/outline';
import React from 'react'
import {useRef, useState} from 'react'
import 'emoji-mart/css/emoji-mart.css'
import {Picker} from 'emoji-mart'

function Input() {
    const [input, setInput] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [showEmojis, setShowEmojis] = useState(false)
    const filePickerRef = useRef();
    const addImageToPost = () => {

    }
    const addEmoji = (e) => {
        let sym =e.unified.split('-')
        let codesArray = []
        sym.forEach((el) => codesArray.push('0x' + el))
        let emoji = String.fromCodePoint(...codesArray)
        setInput(input + emoji)
    }
  return (
    <div className={`
    border-b border-gray-700 p-3 flex space-x-3
    overflow-y-scroll 
    `}>
        <img src='' alt='' className='h-11 w-11 rounded-full cursor-pointer'/>

        <div className='w-full divide-y divide-gray-700'>
            <div className={``}>
                <textarea 
                value={input}
                rows={2}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What's Happening"
                className='bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]
                '/>

                {selectedFile && (
                    <div className='relative'>
                    <div className='absolute h-8 w-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer' onClick={()=>setSelectedFile(null)}>
                        <XIcon className='text-white h-5' />
                    </div>
                    <img src={selectedFile} className='rounded-2xl max-h-80 object-contain' />
                </div>
                )}
            </div>

            <div className='flex items-center justify-between pt-2.5'>
                    <div className='flex items-center'>
                        <div className='icon' onClick={() => filePickerRef.current.click()}>
                            <PhotographIcon className='h-[22px] text-[#1d9bf0]' />
                            <input type='file' hidden onChange={addImageToPost} ref={filePickerRef} />
                        </div>

                        <div className='icon rotate-90'>
                            <ChartBarIcon className='text-[#1d9bf0] h-[22px]' />
                        </div>

                        <div className='icon' onClick={() => setShowEmojis(!showEmojis)}>
                           <EmojiHappyIcon className='text-[#1d9bf0] h-[22px]'/> 
                        </div>

                        <div className='icon'>
                            <CalendarIcon className='text-[#1d9bf0] h-[22px]' />
                        </div>

                        {showEmojis && (
                            <Picker 
                            onSelect={addEmoji}
                            style={{
                                position:'absolute',
                                marginTop:'456px',
                                marginLeft: -40,
                                maxWidth: '320px',
                                borderRadius: '20px',
                            }}
                            theme='dark'
                            />
                        )}
                    </div>

                    <button className='bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default'>
                        Tweet
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Input