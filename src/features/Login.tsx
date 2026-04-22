"use client";

import React, { useState } from 'react';
import { Truck, Lock, Mail } from 'lucide-react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você chamará seu service do Spring Boot
    console.log("Login no Mandaí:", { email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
            <Truck className="h-10 w-10 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Mandaí
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            O seu delivery na velocidade de um clique.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div className="relative">
              <label htmlFor="email" className="sr-only">E-mail</label>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="E-mail"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">Senha</label>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="Senha"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
              <span className="ml-2">Lembrar de mim</span>
            </label>
            <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg bg-orange-600 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Entrar no Mandaí
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Não tem conta?{' '}
          <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
            Cadastre-se grátis
          </a>
        </p>
      </div>
    </div>
  );
}