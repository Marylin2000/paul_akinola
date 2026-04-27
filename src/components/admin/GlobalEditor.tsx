'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Save,
  Plus,
  Trash2,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';
import { api } from '@/lib/api';
import { cn } from '@/lib/utils';

const springConfig = { type: 'spring', stiffness: 300, damping: 25 };

interface Field {
  name: string;
  label?: string;
  type: 'text' | 'textarea' | 'select' | 'array' | 'group' | 'tabs';
  options?: { label: string; value: string }[];
  fields?: Field[];
  tabs?: { label: string; fields: Field[] }[];
}

export function GlobalEditor({ slug, label, config }: { slug: string; label: string; config: { fields: Field[] } }) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await api.globals.get(slug);
        setData(result);
      } catch (err: any) {
        setError('Failed to load global data: ' + err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [slug]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      await api.globals.update(slug, data);
      // Optional: Show success toast
    } catch (err: any) {
      setError('Save failed: ' + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const updateField = (path: string[], value: any) => {
    setData((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) current[path[i]] = {};
        current[path[i]] = { ...current[path[i]] };
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return newData;
    });
  };

  const addArrayItem = (path: string[], fields: Field[]) => {
    const newItem = fields.reduce((acc: any, f) => ({ ...acc, [f.name]: '' }), {});
    const currentArray = path.reduce((acc, p) => acc[p], data) || [];
    updateField(path, [...currentArray, newItem]);
  };

  const removeArrayItem = (path: string[], index: number) => {
    const currentArray = path.reduce((acc, p) => acc[p], data) || [];
    const newArray = [...currentArray];
    newArray.splice(index, 1);
    updateField(path, newArray);
  };

  const renderFields = (fields: Field[], path: string[] = []) => {
    return fields.map((field) => {
      const currentPath = [...path, field.name];
      const value = currentPath.reduce((acc, p) => (acc ? acc[p] : undefined), data);

      if (field.type === 'tabs') {
        return (
          <div key={field.name} className="space-y-4 border border-foreground/10 p-4">
            <p className="text-xs font-bold text-foreground/40 uppercase">{field.label || field.name}</p>
            {field.tabs?.map((tab, idx) => (
              <div key={idx} className="space-y-4 pt-4 border-t border-foreground/5">
                <p className="text-sm font-semibold text-foreground/60 italic">{tab.label}</p>
                {renderFields(tab.fields, path)}
              </div>
            ))}
          </div>
        );
      }

      if (field.type === 'group') {
        return (
          <div key={field.name} className="space-y-6 glass p-6">
            <h4 className="font-serif font-semibold flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary/50" />
              {field.label || field.name}
            </h4>
            <div className="space-y-4">
              {renderFields(field.fields || [], currentPath)}
            </div>
          </div>
        );
      }

      if (field.type === 'array') {
        return (
          <div key={field.name} className="space-y-4 border border-foreground/10 p-6 bg-foreground/5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold">{field.label || field.name}</label>
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => addArrayItem(currentPath, field.fields || [])}
                className="text-xs font-bold text-primary flex items-center gap-1 px-3 py-1.5 border border-primary/20 hover:bg-primary/10 transition-colors"
              >
                <Plus className="w-3 h-3" /> Add Item
              </motion.button>
            </div>
            <div className="space-y-4">
              {Array.isArray(value) &&
                value.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group/item glass p-6 pr-12"
                  >
                    <div className="space-y-4">
                      {renderFields(field.fields || [], [...currentPath, idx.toString()])}
                    </div>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeArrayItem(currentPath, idx)}
                      className="absolute top-4 right-4 p-2 text-foreground/40 hover:text-red-500 hover:bg-red-500/10 opacity-0 group-hover/item:opacity-100 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                ))}
            </div>
          </div>
        );
      }

      return (
        <div key={field.name} className="space-y-2">
          <label className="text-xs font-bold text-foreground/40 ml-1 uppercase tracking-wider">
            {field.label || field.name}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              value={value || ''}
              onChange={(e) => updateField(currentPath, e.target.value)}
              rows={3}
              className="w-full bg-foreground/5 border border-foreground/10 focus:border-primary/50 py-3 px-4 outline-none transition-all resize-none"
              placeholder={`Enter ${field.name}...`}
            />
          ) : field.type === 'select' ? (
            <select
              value={value || ''}
              onChange={(e) => updateField(currentPath, e.target.value)}
              className="w-full bg-foreground/5 border border-foreground/10 focus:border-primary/50 py-3 px-4 outline-none transition-all appearance-none"
            >
              <option value="">Select...</option>
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={value || ''}
              onChange={(e) => updateField(currentPath, e.target.value)}
              className="w-full bg-foreground/5 border border-foreground/10 focus:border-primary/50 py-3 px-4 outline-none transition-all"
              placeholder={`Enter ${field.name}...`}
            />
          )}
        </div>
      );
    });
  };

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  const topLevelFields = config.fields;
  const hasTabs = topLevelFields.length === 1 && topLevelFields[0].type === 'tabs';
  const tabs = hasTabs ? topLevelFields[0].tabs || [] : [];

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ...springConfig }}
      onSubmit={handleSave}
      className="space-y-8 pb-20"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-foreground/10 pb-8">
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={springConfig}>
            <Link
              href="/admin/dashboard"
              className="w-10 h-10 flex items-center justify-center border border-foreground/10 hover:bg-foreground/5 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/60" />
            </Link>
          </motion.div>
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground">{label}</h1>
            <p className="text-foreground/60 text-sm mt-1">Global Settings • {slug}</p>
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={isSaving}
          whileTap={{ scale: 0.98 }}
          transition={springConfig}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-semibold flex items-center gap-2 transition-all disabled:opacity-50"
        >
          {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {isSaving ? 'Saving...' : 'Save Changes'}
        </motion.button>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springConfig}
          className="bg-red-500/10 border border-red-500/20 p-4 flex items-start gap-3 text-red-500"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{error}</p>
        </motion.div>
      )}

      {hasTabs ? (
        <div className="space-y-8">
          {/* Tab Navigation */}
          <div className="flex p-1 bg-foreground/5 border border-foreground/10 w-fit">
            {tabs.map((tab, idx) => (
              <motion.button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                whileTap={{ scale: 0.98 }}
                transition={springConfig}
                className={cn(
                  'px-6 py-2.5 text-sm font-bold transition-all',
                  activeTab === idx
                    ? 'bg-primary text-white'
                    : 'text-foreground/40 hover:text-foreground'
                )}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="space-y-8 max-w-4xl">
            {renderFields(tabs[activeTab].fields)}
          </div>
        </div>
      ) : (
        <div className="space-y-8 max-w-4xl">{renderFields(topLevelFields)}</div>
      )}
    </motion.form>
  );
}
