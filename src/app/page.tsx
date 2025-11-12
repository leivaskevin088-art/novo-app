"use client"

import { useState } from "react"
import { Heart, TrendingUp, BookOpen, Headphones, MessageCircle, Target, Clock, Star, Play, Lock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

interface Resource {
  id: number
  title: string
  author: string
  cover: string
  type: "ebook" | "audio" | "video" | "exercise"
  category: string
  duration: string
  rating: number
  description: string
  featured?: boolean
  locked?: boolean
  progress?: number
}

const resources: Resource[] = [
  {
    id: 1,
    title: "O Guia Definitivo da Superação",
    author: "Dr. Marcus Silva",
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop",
    type: "ebook",
    category: "Fundamentos",
    duration: "2h de leitura",
    rating: 4.9,
    description: "Aprenda as 7 fases da superação e como atravessá-las com força",
    featured: true,
    progress: 0
  },
  {
    id: 2,
    title: "Reconstruindo Sua Identidade",
    author: "Paulo Mendes",
    cover: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&h=600&fit=crop",
    type: "ebook",
    category: "Autoconhecimento",
    duration: "1h 45min",
    rating: 4.8,
    description: "Redescubra quem você é além do relacionamento",
    featured: true,
    progress: 0
  },
  {
    id: 3,
    title: "Meditação para Cura Emocional",
    author: "Rafael Costa",
    cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=600&fit=crop",
    type: "audio",
    category: "Bem-estar",
    duration: "30min",
    rating: 4.7,
    description: "Sessões guiadas para processar a dor e encontrar paz interior",
    progress: 0
  },
  {
    id: 4,
    title: "De Volta ao Jogo",
    author: "André Oliveira",
    cover: "https://images.unsplash.com/photo-1492681290082-e932832941e6?w=400&h=600&fit=crop",
    type: "ebook",
    category: "Relacionamentos",
    duration: "2h 30min",
    rating: 4.6,
    description: "Como voltar a se relacionar com confiança e maturidade",
    locked: true
  },
  {
    id: 5,
    title: "Exercícios de Ressignificação",
    author: "Dr. Felipe Rocha",
    cover: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=600&fit=crop",
    type: "exercise",
    category: "Prática",
    duration: "15min/dia",
    rating: 4.9,
    description: "Atividades práticas para transformar a dor em crescimento",
    featured: true,
    progress: 0
  },
  {
    id: 6,
    title: "Masterclass: Superação Total",
    author: "Bruno Martins",
    cover: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=600&fit=crop",
    type: "video",
    category: "Curso",
    duration: "4h de vídeo",
    rating: 4.8,
    description: "Curso completo com estratégias comprovadas de superação",
    locked: true
  },
  {
    id: 7,
    title: "Podcast: Histórias de Superação",
    author: "Vários autores",
    cover: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=600&fit=crop",
    type: "audio",
    category: "Inspiração",
    duration: "45min/ep",
    rating: 4.7,
    description: "Homens reais compartilham suas jornadas de superação",
    progress: 0
  },
  {
    id: 8,
    title: "Fortalecendo a Autoestima",
    author: "Lucas Ferreira",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    type: "ebook",
    category: "Autoconhecimento",
    duration: "1h 30min",
    rating: 4.8,
    description: "Reconstrua sua confiança e valor próprio",
    progress: 0
  }
]

const categories = ["Todos", "Fundamentos", "Autoconhecimento", "Bem-estar", "Relacionamentos", "Prática", "Inspiração"]

const typeIcons = {
  ebook: BookOpen,
  audio: Headphones,
  video: Play,
  exercise: Target
}

const typeLabels = {
  ebook: "E-book",
  audio: "Áudio",
  video: "Vídeo",
  exercise: "Exercício"
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || resource.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredResources = resources.filter(resource => resource.featured)

  const stats = [
    { label: "Homens ajudados", value: "12.5K+", icon: Heart },
    { label: "Taxa de sucesso", value: "94%", icon: TrendingUp },
    { label: "Recursos disponíveis", value: "150+", icon: BookOpen },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Recomeço Forte
                </h1>
                <p className="text-xs text-slate-400">Supere e evolua</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comunidade
              </Button>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                Minha Jornada
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10" />
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              Plataforma #1 de Superação Masculina
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Transforme a Dor em
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Evolução Pessoal
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Recursos práticos, comunidade de apoio e estratégias comprovadas para você superar o término e se tornar a melhor versão de si mesmo.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Tabs defaultValue="recursos" className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-slate-800 border border-slate-700">
            <TabsTrigger value="recursos" className="gap-2 data-[state=active]:bg-emerald-600">
              <BookOpen className="w-4 h-4" />
              Recursos
            </TabsTrigger>
            <TabsTrigger value="destaque" className="gap-2 data-[state=active]:bg-emerald-600">
              <TrendingUp className="w-4 h-4" />
              Em Destaque
            </TabsTrigger>
          </TabsList>

          {/* Recursos Tab */}
          <TabsContent value="recursos" className="space-y-6">
            {/* Filtros */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Buscar recursos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 whitespace-nowrap" 
                      : "border-slate-600 text-slate-300 hover:bg-slate-800 whitespace-nowrap"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Grid de Recursos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredResources.map((resource) => {
                const TypeIcon = typeIcons[resource.type]
                return (
                  <Card 
                    key={resource.id} 
                    className="group cursor-pointer hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-2 bg-slate-800 border-slate-700 overflow-hidden"
                    onClick={() => setSelectedResource(resource)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={resource.cover}
                        alt={resource.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {resource.locked && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                          <Lock className="w-12 h-12 text-white" />
                        </div>
                      )}
                      <div className="absolute top-2 right-2 bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-semibold text-white">{resource.rating}</span>
                      </div>
                      {resource.featured && (
                        <Badge className="absolute top-2 left-2 bg-gradient-to-r from-emerald-500 to-teal-600">
                          Destaque
                        </Badge>
                      )}
                      <Badge className="absolute bottom-2 left-2 bg-slate-900/90 backdrop-blur-sm text-white">
                        <TypeIcon className="w-3 h-3 mr-1" />
                        {typeLabels[resource.type]}
                      </Badge>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg line-clamp-1 text-white">{resource.title}</CardTitle>
                      <CardDescription className="text-slate-400">
                        {resource.author}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3 space-y-3">
                      <p className="text-sm text-slate-400 line-clamp-2">{resource.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                          {resource.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-3 h-3" />
                          <span>{resource.duration}</span>
                        </div>
                      </div>
                      {resource.progress !== undefined && resource.progress > 0 && (
                        <div className="space-y-1">
                          <Progress value={resource.progress} className="h-1" />
                          <span className="text-xs text-slate-400">{resource.progress}% completo</span>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                        {resource.locked ? "Desbloquear" : "Acessar"}
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 mx-auto text-slate-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-300 mb-2">
                  Nenhum recurso encontrado
                </h3>
                <p className="text-slate-400">
                  Tente ajustar sua busca ou filtros
                </p>
              </div>
            )}
          </TabsContent>

          {/* Destaque Tab */}
          <TabsContent value="destaque" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Recursos em Destaque
              </h2>
              <p className="text-slate-400">Os mais eficazes para sua jornada de superação</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredResources.map((resource) => {
                const TypeIcon = typeIcons[resource.type]
                return (
                  <Card 
                    key={resource.id} 
                    className="group cursor-pointer hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 bg-slate-800 border-slate-700 overflow-hidden"
                    onClick={() => setSelectedResource(resource)}
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative w-full sm:w-48 h-64 sm:h-auto overflow-hidden">
                        <img
                          src={resource.cover}
                          alt={resource.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <Badge className="absolute top-2 left-2 bg-gradient-to-r from-emerald-500 to-teal-600">
                          <TypeIcon className="w-3 h-3 mr-1" />
                          {typeLabels[resource.type]}
                        </Badge>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{resource.title}</h3>
                            <p className="text-sm text-slate-400">{resource.author}</p>
                          </div>
                          <div className="flex items-center gap-1 bg-slate-900/50 px-2 py-1 rounded-full">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-semibold text-white">{resource.rating}</span>
                          </div>
                        </div>
                        <p className="text-slate-300 mb-4 leading-relaxed">{resource.description}</p>
                        <div className="flex items-center gap-3 mb-4 text-sm text-slate-400">
                          <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                            {resource.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{resource.duration}</span>
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                          Começar Agora
                        </Button>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Modal de Detalhes */}
      {selectedResource && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedResource(null)}
        >
          <Card 
            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-slate-800 border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80">
              <img
                src={selectedResource.cover}
                alt={selectedResource.title}
                className="w-full h-full object-cover"
              />
              {selectedResource.locked && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="w-16 h-16 text-white mx-auto mb-3" />
                    <p className="text-white font-semibold">Conteúdo Premium</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-white font-bold text-3xl mb-2">{selectedResource.title}</h2>
                <p className="text-white/90 text-lg">{selectedResource.author}</p>
              </div>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4 flex-wrap">
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600">
                  {typeLabels[selectedResource.type]}
                </Badge>
                <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                  {selectedResource.category}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-white">{selectedResource.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>{selectedResource.duration}</span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {selectedResource.description}
              </p>
              {selectedResource.progress !== undefined && selectedResource.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Progresso</span>
                    <span className="text-emerald-400 font-semibold">{selectedResource.progress}%</span>
                  </div>
                  <Progress value={selectedResource.progress} className="h-2" />
                </div>
              )}
              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                  {selectedResource.locked ? "Desbloquear Agora" : "Continuar"}
                </Button>
                <Button variant="outline" onClick={() => setSelectedResource(null)} className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  Fechar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
