import { promises as fs } from 'fs'
import styles from './page.module.scss'
import Header from '@/components/Header/Header'
import MainBanner from '@/components/MainBanner/MainBanner'
import Section from '@/ui/Section/Section'
import Heading from '@/ui/Heading/Heading'
import SubTitle from '@/ui/SubTitle/SubTitle'

export default async function Home() {
  const file = await fs.readFile(`${ process.cwd() }/app/data/data.json`, 'utf8')
  const data = JSON.parse(file)
  return (
    <main>
      <div className={ styles.wrapper }>
        <Header data={ data.header } />
        <MainBanner />
      </div>
      <Section className="pt-200">
        <SubTitle className="mb-4 text-align-center">Who choose us</SubTitle>
        <Heading hlevel="h2" className="text-align-center">
          Our values
        </Heading>
      </Section>
    </main>
  )
}
