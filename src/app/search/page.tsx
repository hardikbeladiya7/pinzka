import React from 'react'
import SearchComponent from './SearchComponent'
import Head from 'next/head'

const page = () => {
    return (
        <div>
            <Head>
                <title>Search Page</title>
            </Head>
            <SearchComponent />
        </div>
    )
}

export default page