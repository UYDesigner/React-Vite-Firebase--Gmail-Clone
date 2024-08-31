import React, { useEffect, useState } from 'react'
import { Msg } from './Msg'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../Redux/appSlice'

export const Messages = () => {

    const dispatch = useDispatch();
    const {emails, searchText} = useSelector(store => store.appSlice)
    const [tempEmails, setTempEmails] = useState(emails)


    useEffect(() => {
        const q = query(collection(db, "emails"), orderBy('createAt', 'desc'))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const allEmails = snapshot.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            }))
            // console.log(allEmails, 'EMAILSFROMFIREBASE')
            dispatch(setEmails(allEmails));

        })

        // CLEANNUP
        return () => unsubscribe();

    }, [])

    useEffect(()=>{


        const filteredEmails = emails?.filter((email)=>{
            return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase())
        })

        setTempEmails(filteredEmails)
    },[searchText, emails])

    return (
        <div>
            {
                tempEmails && tempEmails?.map((email) => <Msg email={email} />)
            }



        </div>
    )
}
