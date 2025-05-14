"use client"

import Nav from "@/components/nav"
import Footer from "@/components/footer"
import ListHero from "@/components/deals/listHero"
import MainList from "@/components/deals/mainList"


function List() {
  return (
    <>
    <Nav />
    <ListHero />
    <MainList />
    <Footer />
    </>
  )
}

export default List
