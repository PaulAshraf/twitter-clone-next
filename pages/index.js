import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Tweet from './Tweet'

import path from 'path'
import fs from 'fs'

export default function Home({ file }) {
	return (
		<div style={{ background: '#192841', padding: '30px' }}>
			{file.map((e) => (
				<Tweet key={e.id} text={e.text} author={e.author} date={e.date} />
			))}
		</div>
	)
}

export async function getServerSideProps() {
	const p = path.join(process.cwd(), 'data.json')

	const file = JSON.parse(fs.readFileSync(p))

	return {
		props: {
			file,
		},
	}
}
