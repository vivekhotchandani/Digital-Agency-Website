'use client'

import { useState } from 'react'
import Confetti from 'react-confetti'

export const ContactForm = () => {
    const [isSubmitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')
    // const subject = 'Contact Form'

    const onSubmit = async (e) => {

        e.preventDefault()

        try {

            const res = await fetch('http://127.0.0.1:8001/contact/contact/', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    subject,

                }),
                headers: {
                    'content-type': 'application/json',
                },
            })
            if (res.ok) {
                console.log('res', res)

                setSubmitted(true)
            }
        } catch (err) {

            console.error('Err', err)
        }
    }

    return isSubmitted ? (
        <div>
            <h1
                className="text-center font-semibold text-3xl
      "
            >
                Thank you for your message!
            </h1>
            <Confetti />
        </div>
    ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-8">
            <div className="">
                <label className="label font-semibold">
                    <span className="label-text">Full Name</span>
                </label>
                <input
                    className="input w-full input-bordered input-primary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Ethan Mick"
                />
            </div>
            <div>
                <label className="label font-semibold">
                    <span className="label-text">Email</span>
                </label>
                <input
                    className="input w-full input-bordered input-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="name@example.com"
                />
            </div>
                <div className="">
                    <label className="label font-semibold">
                        <span className="label-text">Subject</span>
                    </label>
                    <input
                        className="input w-full input-bordered input-primary"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        type="text"
                        placeholder="Topic"
                    />
                </div>
            <div>
                <label className="label font-semibold">
                    <span className="label-text">Message</span>
                </label>
                <textarea
                    className="textarea w-full textarea-primary"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    )
}