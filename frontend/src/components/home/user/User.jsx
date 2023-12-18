import React from 'react'
import { useMutation } from "react-query";

import Modal from '../../modal/Modal'
import Form from '../../form/Form'
import Rating from '../../rating/Rating'

import { addStar } from '../../../services/star';
import { alert } from "../../../helpers/alert";
import { starAddValidation } from '../../../validations/star';

const User = ({ data, setData }) => {
    const { mutate: onAdd, isLoading } = useMutation(addStar, {
        onSuccess: () => {
            alert("Product starred successfully", "success");
            setData(null)
        },
        onError: (error) => alert(error?.response?.data?.message),
    });

    const fields = [
        {
            name: "name",
            label: "Name",
        },
        {
            name: "email",
            label: "Email",
            type: "Email"
        },
    ]

    const onSubmit = (data) => {
        // console.log(data)
        onAdd(data);
    }
    return (
        <Modal onClose={() => setData(null)} open={data != null} className='max-h-full w-[200px]'>
            <Rating
                rating={data?.rating}
                size={25}
                onClick={(value) => setData(prev => ({ ...prev, rating: value }))}
            />
            <Form
                fields={fields}
                onSubmit={onSubmit}
                values={data}
                isLoading={isLoading}
                validation={starAddValidation}
            />
        </Modal>
    )
}

export default User;