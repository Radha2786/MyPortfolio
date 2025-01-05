import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import {certifications} from "../data/certifications";
import { Certifications } from "@/components/Certifications";

export function CertificationPage() {
  return (
    <Certifications/>
  )
}
