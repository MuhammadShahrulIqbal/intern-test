"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");

  const displayName = name || "Your Name";
  const displayEmail = email || "your@email.com";
  const displayRole = role || "Your Role";
  const displayBio =
    bio || "Write a short bio about yourself so it appears here.";

  const avatarLetter = displayName.charAt(0).toUpperCase();

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Profile Page</h1>
          <p className="text-slate-600">
            Isi maklumat anda dan tengok live preview profile di sebelah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  placeholder="Masukkan nama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="Masukkan email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Role</label>
                <Input
                  placeholder="Contoh: Frontend Developer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Bio</label>
                <Textarea
                  placeholder="Tulis sedikit tentang diri anda"
                  className="min-h-[120px]"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white text-2xl font-bold">
                  {avatarLetter}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {displayName}
                  </h2>
                  <p className="text-blue-600 font-medium">{displayRole}</p>
                  <p className="text-sm text-slate-600">{displayEmail}</p>
                </div>
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="text-sm text-slate-600 mb-2">Bio</p>
                <p className="text-slate-900">{displayBio}</p>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}